/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dnd5eapi.co",
      },
    ],
  },
};



export default nextConfig;
