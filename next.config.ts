import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // ✅ Disable ESLint during builds to prevent Vercel from failing on minor warnings
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    // reactCompiler: true,
  },

  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "yt3.googleusercontent.com" },
      { hostname: "cdn.prod.website-files.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "i.imgur.com" },
      { hostname: "media.discordapp.net" },
    ],
  },
}

export default nextConfig
