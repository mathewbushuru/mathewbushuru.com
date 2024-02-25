/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/mathewbushuru",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/mathewbushuru/",
        permanent: true,
      },
      {
        source: "/undergrad-thesis",
        destination:
          "https://drive.google.com/file/d/1t95E0oJWrLI9KoxyiY9bYehc0wOcvo-3/view",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
