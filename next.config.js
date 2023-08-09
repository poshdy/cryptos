/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.coinranking.com", "www.bing.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
