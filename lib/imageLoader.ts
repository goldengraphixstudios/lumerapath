// Custom next/image loader for static export.
// Prepends the Pages base path (e.g. /lumerapath) to local image srcs so they
// resolve correctly when the site is served from a project subpath. Remote URLs
// pass through untouched. Images are served as-is (no optimization server).
type LoaderArgs = { src: string; width: number; quality?: number };

export default function imageLoader({ src }: LoaderArgs): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (/^https?:\/\//.test(src)) return src;
  return `${basePath}${src}`;
}
