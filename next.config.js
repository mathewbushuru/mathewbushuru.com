/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // TODO
  images: { unoptimized: true, path: "/" },
  output: "export",
};

module.exports = nextConfig;
