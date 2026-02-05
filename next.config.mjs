/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api-backend/:path*',
        destination: 'https://irmaback.dbblab.es/:path*',
      },
    ]
  },
}

export default nextConfig