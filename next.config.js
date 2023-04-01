/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt', '@next-auth/prisma-adapter']
  },
}

module.exports = nextConfig
