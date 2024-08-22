import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://i1da725.github.io',
  base: 'new-site',
  integrations: [react(), tailwind()]
});
