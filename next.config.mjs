/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
