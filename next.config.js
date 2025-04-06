/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wine-bar-landing',
  images: {
    unoptimized: true,
  },
  // Удалите или закомментируйте эти строки, если они есть
  // assetPrefix: '/vine/',
  // loader: 'custom',
  // loaderFile: './image-loader.js',
};

module.exports = nextConfig; 