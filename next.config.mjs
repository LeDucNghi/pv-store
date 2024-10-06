/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },

      {
        protocol: "https",
        hostname: "cf.shopee.vn",
      },

      {
        protocol: "https",
        hostname: "cdn2-retail-images.kiotviet.vn",
      },

      {
        protocol: "https",
        hostname: "cdn-images.kiotviet.vn",
      },
    ],
  },
};

export default nextConfig;
