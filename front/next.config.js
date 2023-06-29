/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
        has: [
          {
            type: "host",
            value: "(http://)",
          },
        ],
        permanent: true,
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
