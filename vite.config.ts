// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel serves static files from the output folder; TanStack Start's client build
// does not write index.html until prerender runs — without it the SPA fallback
// pointed at missing HTML and JS never loaded.
//
// On Vercel, disable the Cloudflare plugin: it rewrites SSR rollup input so the bundle
// is emitted as dist/server/index.js, but prerender resolves dist/server/server.js.

export default defineConfig({
  cloudflare: process.env.VERCEL ? false : undefined,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
