const { execSync } = require('child_process');
const path = require('path');

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
  webpack: (config, { isServer }) => {
    if (isServer) {
      execSync('node src/scripts/generate-sitemap.mjs', { stdio: 'inherit' });
    }
    return config;
  },
};

module.exports = nextConfig;
