import type { NextConfig } from "next";

import { ALLOWED_HOSTS } from "~/config/allowedHosts";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: ALLOWED_HOSTS.map((domain) => ({
      protocol: "https",
      hostname: domain,
      port: "",
      pathname: "/**"
    })),
  unoptimized: true,
  },
  experimental: {
    reactCompiler: true
  },
};

export default nextConfig;
