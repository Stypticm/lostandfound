import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xvrcodwdcluycpdbcfpc.supabase.co',
        port: '',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
