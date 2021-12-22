const withBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});
