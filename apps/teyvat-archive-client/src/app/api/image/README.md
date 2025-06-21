# Image Proxy API Route

This API route (`/api/image`) provides image proxying and optimization functionality that is compatible with Cloudflare Workers.

## Overview

The route was refactored to work with Cloudflare Workers by removing Node.js-specific dependencies like `sharp` and `lru-cache` that are not compatible with the Workers runtime.

## Features

- **Image Proxying**: Proxies images from allowed domains to avoid CORS issues
- **Cloudflare Image Resizing**: Automatically uses Cloudflare's image resizing service when available
- **Format Optimization**: Supports automatic format selection (WebP, AVIF) when running on Cloudflare
- **Security**: Only allows images from predefined trusted domains
- **Fallback Support**: Gracefully falls back to original images if processing fails

## Query Parameters

- `url` (required): The URL of the image to proxy
- `w` (optional): Width for resizing the image
- `q` (optional): Quality setting for image compression (1-100)

## Example Usage

```
/api/image?url=https://enka.network/ui/UI_AvatarIcon_Albedo.png&w=256&q=80
```

## Cloudflare Workers Compatibility

### What Changed

1. **Removed `sharp` library**: Sharp requires native Node.js modules not available in Workers
2. **Removed `lru-cache`**: In-memory caching doesn't persist across Worker invocations
3. **Added Cloudflare Image Resizing**: Uses Cloudflare's built-in image optimization when available
4. **Simplified buffer handling**: Uses ArrayBuffer instead of Node.js Buffers

### Cloudflare Features Used

- **Image Resizing**: Automatic resizing and format conversion
- **Format Optimization**: Automatic WebP/AVIF conversion based on client support
- **Edge Caching**: Images are cached at Cloudflare's edge locations

## Error Handling

- Returns 400 for missing URL parameter
- Returns 403 for URLs from non-allowed domains
- Falls back to original image URL on processing errors
- Includes proper CORS headers for client-side usage

## Performance

- No server-side processing overhead (handled by Cloudflare)
- Global edge caching for improved load times
- Automatic format selection for optimal file sizes

## Security

Only images from domains listed in `~/config/allowedHosts.ts` are allowed to be proxied.
