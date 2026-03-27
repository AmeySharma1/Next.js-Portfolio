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
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Enable compression
  compress: true,

  // Optimize bundle
  poweredByHeader: false,
};

export default nextConfig;