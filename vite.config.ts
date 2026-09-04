import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Plain Vite + React SPA. `vite build` emits a fully static `dist/`
// (no SSR entry, no nitro/Cloudflare worker) suitable for static hosting.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // "@/*" path alias comes from tsconfig.json
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});
