/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "1furniturerestoration.com",
        port: "",
        pathname: "/media/services_media_photo/**",
      },
    ],
    domains: ["1furniturerestoration.com"],
  },

  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
