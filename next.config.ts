/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;
