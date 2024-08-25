import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    minimumCacheTTL: 60
  }
};

export default withNextIntl(nextConfig);
