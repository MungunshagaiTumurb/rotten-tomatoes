/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "m.media-amazon.com",
      "rottentomatoes.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
