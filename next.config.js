/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  images: {
    domains: ['store.storeimages.cdn-apple.com'],
  },
};

module.exports = nextConfig;
