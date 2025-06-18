// lib/cloudflare-loader.js
export default function cloudflareLoader({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = [`width=${width}`, `quality=${quality ?? 80}`, "format=webp"];

  // If src is already a full URL, encode it
  const encodedSrc = src.startsWith("http") ? encodeURIComponent(src) : src;

  return `/cdn-cgi/image/${params.join(",")}/${encodedSrc}`;
}
