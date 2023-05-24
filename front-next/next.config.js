/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "itek-dev.highcat.org",
                port: "",
                pathname: "/media/services_media_photo/**",
            },
        ],
        domains: ["itek-dev.highcat.org"],
    },
};

module.exports = nextConfig;
