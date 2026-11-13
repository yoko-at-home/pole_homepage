/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  async redirects() {
    return [
      {
        source: "/news/page/1",
        destination: "/news",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // クライアントサイドでは 'fs' と 'child_process' を無視
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        net: false,
        tls: false,
        ...config.resolve.fallback, // 既存の設定も保持
      };
    }
    return config;
  },
};

module.exports = nextConfig;
