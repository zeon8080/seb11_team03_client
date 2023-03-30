/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "eatsme",

  exportPathMap: () => ({
    "/": { page: "/" },
    "/routeWrite": { page: "/routeWrite" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
