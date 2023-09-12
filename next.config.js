const path = require("path");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: "./",
  images: {
    loader: "akamai",
    path: "",
    domains: ["lh3.googleusercontent.com", "fastly.picsum.photos"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
