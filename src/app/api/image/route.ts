// app/api/image/route.ts

import { LRUCache } from "lru-cache";
import { NextResponse } from "next/server";
import sharp from "sharp";

import { ALLOWED_HOSTS } from "~/config/allowedHosts";

// In-memory cache
const cache = new LRUCache<string, Buffer>({
  max: 100,
  ttl: 1000 * 60 * 60 // 1 hour
});

// Query parameter interface
interface ImageQuery {
  url?: string;
  w?: string;
  q?: string;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const w = searchParams.get("w");
  const q = searchParams.get("q");

  if (!url) {
    return NextResponse.json(
      { error: "Image URL is required" },
      { status: 400 }
    );
  }

  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname;
  if (!hostname || !ALLOWED_HOSTS.includes(hostname)) {
    return NextResponse.json({ error: "Invalid image host" }, { status: 403 });
  }

  // Generate cache key
  const cacheKey = `${url}-${w}-${q}`;
  const cachedImage = cache.get(cacheKey);
  if (cachedImage) {
    return new NextResponse(new Uint8Array(cachedImage), {
      status: 200,
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }

  try {
    // Fetch image
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const buffer = await response.arrayBuffer();

    // Determine format based on Accept header
    const accept = req.headers.get("accept") ?? "";
    const format = accept.includes("image/webp") ? "webp" : "jpeg";

    // Process image with sharp
    const processedImage = await sharp(Buffer.from(buffer))
      .resize({
        width: w ? parseInt(w, 10) : undefined,
        fit: "inside",
        withoutEnlargement: true
      })
      .toFormat(format, { quality: q ? parseInt(q, 10) : 80 })
      .toBuffer();

    // Store in cache
    cache.set(cacheKey, processedImage);

    return new NextResponse(new Uint8Array(processedImage), {
      status: 200,
      headers: {
        "Content-Type": `image/${format}`,
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch (error) {
    console.error("Image processing error:", error);
    // Fallback to original image
    return NextResponse.redirect(url);
  }
}
