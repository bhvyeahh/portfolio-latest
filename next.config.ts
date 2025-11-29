import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ← THIS SHOULD BE INSIDE
  },
  // other config options here...
};

export default nextConfig;
