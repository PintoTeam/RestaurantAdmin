/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  target: 'serverless', // Add this line to set the target to 'serverless'
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other routes as needed
    };
  },
  // Use the "output: 'export'" option
  output: 'export',
};

export default nextConfig;
