/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ['en', 'ua', 'ru'],
    defaultLocale: 'ua',
    localeDetection: false,
  },
};

module.exports = nextConfig;
