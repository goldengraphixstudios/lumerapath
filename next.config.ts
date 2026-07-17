import type { NextConfig } from "next";

// The site now deploys to a custom domain (bridge.lumerapath.com) via
// GitHub Pages, which serves from the root, so PAGES_BASE_PATH is normally
// unset. It's kept env-gated in case a future deploy target needs a project
// subpath again (e.g. a plain *.github.io/reponame/ URL with no custom domain).
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
    NEXT_PUBLIC_LEADS_ENDPOINT:
      process.env.NEXT_PUBLIC_LEADS_ENDPOINT ?? "https://formspree.io/f/mrenponw",
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
