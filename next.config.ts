import type { NextConfig } from "next";
const repo = 'nextjs-tic-tac-toe';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  trailingSlash: true,
};


export default nextConfig;
