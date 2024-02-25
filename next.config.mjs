/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/undergrad-thesis",
        destination:
          "https://drive.google.com/file/d/1t95E0oJWrLI9KoxyiY9bYehc0wOcvo-3/view",
        permanent: true
      },
    ];
  },
};

export default nextConfig;
