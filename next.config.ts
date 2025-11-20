import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel supports full Next.js features, no need for static export
  images: {
    unoptimized: true, // You can remove this if you want Vercel's image optimization
  },
};

export default nextConfig;
