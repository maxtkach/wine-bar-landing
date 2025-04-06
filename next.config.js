/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wine-bar-landing',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  assetPrefix: '/vine/',
};

module.exports = nextConfig; 