import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "homdgcat.wiki",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gi.yatta.moe",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "azula9713.github.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
