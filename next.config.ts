import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: import("next").NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "berles.gemes.eu",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
};

export default withPayload(nextConfig);
