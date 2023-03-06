/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DISCORD: process.env.DISCORD,
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS,
    NEXT_PUBLIC_TESTS: process.env.NEXT_PUBLIC_TESTS,
    NEXT_PUBLIC_CURRENCY: process.env.NEXT_PUBLIC_CURRENCY,
    NEXT_PUBLIC_PRICE: process.env.NEXT_PUBLIC_PRICE,
  },
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = nextConfig
