/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  output: "standalone",
  images: {
    domains: [
      "images.unsplash.com",
      "image.tmdb.org",
      "ik.imagekit.io",
      "res.cloudinary.com",
    ],
    unoptimized: true,
  },
};
