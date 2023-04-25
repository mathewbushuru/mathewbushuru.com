/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // TODO 
  images: { unoptimized: true },
  output: "export",
};

module.exports = nextConfig;
