/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // swcMinify: true,
  // generateBuildId: () => "eatsme",

  // exportPathMap: () => ({
  //   "/": { page: "/" },
  //   "/routeWrite": { page: "/routeWrite" },
  //   "/404": { page: "/404" },
  // }),
};

module.exports = nextConfig;
