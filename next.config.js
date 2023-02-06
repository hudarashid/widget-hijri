/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    loader: "akamai",
    path: "",
  }
}

module.exports = nextConfig
