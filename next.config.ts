import type { NextConfig } from "next";

// The site ships as plain files for Apache + PHP on CWP (see DEPLOY-CWP.md):
// `next build` writes it to out/. A static export has no Node server, so:
// - the forms post to the PHP handlers in public/api/ instead of Server Actions;
// - the old WordPress redirects live in the generated .htaccess
//   (scripts/cwp-release.mts) instead of redirects() here;
// - images are served as they are, without the optimisation server.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
