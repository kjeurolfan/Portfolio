import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Capital 'P' to match your Browser URL and Image paths
  basePath: '/Portfolio', 
  assetPrefix: '/Portfolio',
};

export default nextConfig;