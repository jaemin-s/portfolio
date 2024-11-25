import type { NextConfig } from "next";

const prefix = process.env.NODE_ENV === 'production' ? 'https://jaemin-s.github.io/' : ''

const nextConfig: NextConfig = {
  output: 'export', //static export 추가
  assetPrefix: '.', //상대경로

  /* config options here */
};

export default nextConfig;
