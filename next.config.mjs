import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  }
};

export default withNextIntl(nextConfig);
