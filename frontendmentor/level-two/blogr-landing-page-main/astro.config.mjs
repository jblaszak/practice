import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jblaszak.github.io",
  base: "/frontendmentor/level-two/blogr-landing-page-main",
  integrations: [react()],
});
