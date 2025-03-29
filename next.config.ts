import type { NextConfig } from "next";

const imageDomains = [
  "homdgcat.wiki",
  "gi.yatta.moe",
  "cdn.teyvatarchive.online",
  "enka.network",
  "sdk.hoyoverse.com",
  "fastcdn.hoyoverse.com",
  "act-webstatic.hoyoverse.com",
];
const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: imageDomains,
  },
};

export default nextConfig;
