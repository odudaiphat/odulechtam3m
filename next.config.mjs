/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: []
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
