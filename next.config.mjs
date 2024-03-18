/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const projectSlug = 'pyt1center'

const nextConfig = {
  output: 'export',
  distDir: projectSlug,
  basePath: isProd ? `/app/${projectSlug}` : '',
  assetPrefix: isProd ? `/app/${projectSlug}/` : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
