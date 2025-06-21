import Image from "next/image";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  unoptimized?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width = 300,
  height = 300,
  className,
  unoptimized = false,
  ...rest
}: Readonly<Props>) {
  const proxyUrl = `/api/image?url=${encodeURIComponent(src)}&w=${width}&q=80`;
  const placeholderUrl = `/api/image?url=${encodeURIComponent(src)}&w=20&q=10`;

  return (
    <Image
      {...rest}
      src={proxyUrl}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
      blurDataURL={placeholderUrl}
      loading="lazy"
      className={className}
      unoptimized={unoptimized}
    />
  );
}