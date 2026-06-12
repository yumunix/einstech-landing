/** @type {import('next').NextConfig} */
const previewAssetPrefix = process.env.NEXT_PREVIEW_ASSET_PREFIX;

const nextConfig = {
  reactStrictMode: true,
  ...(previewAssetPrefix ? { assetPrefix: previewAssetPrefix } : {}),
  async redirects() {
    return [
      { source: "/rose-ha.html", destination: "/ha-cluster", permanent: true },
      { source: "/storage-backup.html", destination: "/storage-backup", permanent: true },
      { source: "/dlp-antivirus.html", destination: "/dlp-antivirus", permanent: true },
      { source: "/company.html", destination: "/company", permanent: true },
    ];
  },
};

module.exports = nextConfig;
