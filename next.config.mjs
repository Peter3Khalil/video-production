import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[{hostname:"event-town-api.onrender.com"},{
      hostname:"picsum.photos"
    },{
      hostname:"example.com"
    }]
  }
};

export default withNextIntl(nextConfig);
