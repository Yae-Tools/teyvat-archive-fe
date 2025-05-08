/* eslint-disable @next/next/no-img-element */
"use client";

import { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

import loaderGif from "~/assets/images/loaders/genshin.gif";

type Props = {
  img: StaticImageData | string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  isDarkened?: boolean;
};

export default function LazyBackgroundImage({
  img,
  children,
  className,
  style,
  isDarkened
}: Readonly<Props>) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [imgUnloaded, setImgUnloaded] = useState<StaticImageData>(loaderGif);

  const handleLoad = () => {
    setLoaded(true);
    setImgUnloaded(img as StaticImageData);
  };

  useEffect(() => {
    if (!loaded && imageRef.current?.complete) {
      setLoaded(true);
      setImgUnloaded(img as StaticImageData);
    }
  }, []);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `${
          isDarkened
            ? "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4) ),"
            : ""
        }url(${
          typeof imgUnloaded === "string" ? imgUnloaded : imgUnloaded.src
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        transition: "filter 0.5s",
        ...style
      }}
    >
      <img
        ref={imageRef}
        src={typeof img === "string" ? img : img.src}
        alt=""
        onLoad={handleLoad}
        style={{ display: "none" }}
      />
      {children}
    </div>
  );
}
