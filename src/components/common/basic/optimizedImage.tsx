// components/OptimizedImage.tsx
import Image from "next/image";
import { HTMLProps } from "react";

interface Props extends Omit<HTMLProps<HTMLImageElement>, 'width' | 'height' | 'src' | 'alt' | 'placeholder'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width = 300,
  height = 300,
  className,
  priority = false,
  ...rest
}: Readonly<Props>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
      className={className}
      {...rest}
    />
  );
}