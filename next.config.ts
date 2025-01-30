import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en-US', 'th-TH'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
};

export default nextConfig;
