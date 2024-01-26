/** @type {import('next').NextConfig} */

const addApp = (domain, basePath) => {
  return [
    // Main
    {
      source: basePath,
      destination: `${domain}${basePath}`,
    },
    {
      source: `${basePath}/:path*`,
      destination: `${domain}${basePath}/:path*`,
    },
  ];
};

module.exports = {
  async rewrites() {
    return [...addApp("http://localhost:3001", "/test")];
  },
  // transpilePackages: ["@repo/ui"],
};
