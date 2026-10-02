import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All imagery is served locally from /public/images. Remote patterns are
    // intentionally left empty so the image optimizer cannot be used to
    // proxy arbitrary third-party hosts.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
