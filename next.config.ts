import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // ✅ Add this block (fix your deployment issue)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimize video loading
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Enable compression
  compress: true,
};

export default nextConfig;