/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '100.192.1.133',
        port: '1339'
      }
    ],
    domains: ['localhost', 'sczmetropoli.santacruz.gob.bo', 'metropoli-strapi.santacruz.gob.bo'],
  },
  env: {
    API_URL: process.env.API_URL,
    API_URLIMG: process.env.API_URLIMG,
    customKey: 'https://sczmetropoli.santacruz.gob.bo',
  },
   reactStrictMode: true
};
// http://localhost:1337
module.exports = nextConfig;
