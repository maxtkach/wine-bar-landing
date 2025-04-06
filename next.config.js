/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wine-bar-landing',
  assetPrefix: '/wine-bar-landing/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maxtkach.github.io',
      },
    ],
  },
  // Удалите или закомментируйте эти строки, если они есть
  // loader: 'custom',
  // loaderFile: './image-loader.js',
};

module.exports = nextConfig; 