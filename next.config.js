/** @type {import('next').NextConfig} */
const previewAssetPrefix = process.env.NEXT_PREVIEW_ASSET_PREFIX;

const nextConfig = {
  reactStrictMode: true,
  ...(previewAssetPrefix ? { assetPrefix: previewAssetPrefix } : {}),
};

module.exports = nextConfig;
