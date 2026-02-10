import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // MAKE SURE THIS MATCHES YOUR GITHUB REPO NAME EXACTLY
  // If your repo URL is github.com/kjeurolfan/Portfolio -> use '/Portfolio'
  basePath: '/Portfolio', 
  assetPrefix: '/Portfolio',
};

export default nextConfig;