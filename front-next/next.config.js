/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'itek-dev.highcat.org',
        port: '',
        pathname: '/media/services_media_photo/**',
      },
    ],
  }
}

module.exports = nextConfig
