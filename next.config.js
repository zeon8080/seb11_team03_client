/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  generateBuildId: () => "eatsme",
};

module.exports = nextConfig;
