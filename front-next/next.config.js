/** @type {import('next').NextConfig} */
const nextConfig = {
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
