/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/landing",
        destination: "/landing/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
