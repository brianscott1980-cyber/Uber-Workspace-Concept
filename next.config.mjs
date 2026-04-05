/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

// For project pages, serve from /<repo>. For user/org pages, serve from root.
const isUserOrOrgPages = repo.endsWith('.github.io');
const basePath = isGithubActions && !isUserOrOrgPages ? `/${repo}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
