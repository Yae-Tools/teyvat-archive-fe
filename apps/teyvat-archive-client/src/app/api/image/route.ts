// app/api/image/route.ts

import { NextResponse } from "next/server";

import { ALLOWED_HOSTS } from "~/config/allowedHosts";

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

  try {
    // Build image transformation options
    const width = w ? parseInt(w, 10) : undefined;
    const quality = q ? Math.min(100, Math.max(1, parseInt(q, 10))) : undefined;
    
    // Check if we're running in Cloudflare Workers
    const isCloudflareWorker = typeof caches !== 'undefined' && 'cf' in Request.prototype;
    
    let imageUrl = url;
    const fetchOptions: RequestInit & { cf?: any } = {
      headers: {
        'User-Agent': 'Teyvat-Archive/1.0',
        'Accept': 'image/webp,image/avif,image/jpeg,image/png,*/*',
      }
    };

    // If running in Cloudflare Workers, try to use image resizing
    if (isCloudflareWorker && (width || quality)) {
      // For Cloudflare Image Resizing, we need to use fetch with cf options
      fetchOptions.cf = {
        image: {
          ...(width && { width }),
          ...(quality && { quality }),
          format: 'auto', // Let Cloudflare choose the best format
          fit: 'scale-down',
        }
      };
    } else if (width && hostname === "enka.network") {
      // Some services support URL-based transformations
      imageUrl = `${url}${url.includes('?') ? '&' : '?'}width=${width}`;
    }
    
    // Fetch the image
    const response = await fetch(imageUrl, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }

    // Get the response body as array buffer
    const arrayBuffer = await response.arrayBuffer();
    
    // Determine content type from response or default to jpeg
    const contentType = response.headers.get('content-type') ?? 'image/jpeg';
    
    // Create response with appropriate headers
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Vary': 'Accept',
      }
    });
  } catch (error) {
    console.error("Image proxy error:", error);
    
    // Fallback: redirect to original image
    return NextResponse.redirect(url, 302);
  }
}