import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/personal_website', // Only if repo is NOT named username.github.io
  assetPrefix: '/personal_website', // Only if repo is NOT named username.github.io
};

export default nextConfig;
