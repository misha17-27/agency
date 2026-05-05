import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "webline.az",
      },
      {
        protocol: "https",
        hostname: "fls-9f1d25fb-59b4-45a0-a922-2d3c65bf4734.laravel.cloud",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
