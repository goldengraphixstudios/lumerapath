import type { NextConfig } from "next";

// When building for GitHub Pages the site is served from a project subpath
// (e.g. /lumerapath). The deploy workflow sets PAGES_BASE_PATH; local dev and
// root deployments leave it unset.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
