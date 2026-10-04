/**
 * GitHub Pages project sites are served from a sub-path (e.g. /ws-portfolio/),
 * so every internal link and public asset URL must be prefixed with the base.
 */
const base = import.meta.env.BASE_URL;

/** Prefix an internal path with the configured Astro base. */
export function withBase(path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}${clean}` : base;
}
