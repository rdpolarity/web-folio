/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dxn4wbidw/image/upload/',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(fbx)$/,
      use: {
        loader: 'raw-loader',
      }
    })
    return config
  }
}

module.exports = nextConfig
