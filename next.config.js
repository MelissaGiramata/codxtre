// next.config.js
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['tailwindcss']);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.resolve.alias['@emotion/react'] = require.resolve('@emotion/react');
      config.resolve.alias['@emotion/styled'] = require.resolve('@emotion/styled');
    }
    return config;
  },
};

module.exports = withPlugins([withTM], nextConfig);