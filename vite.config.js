import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/index") || id.includes("react/jsx-runtime")) return "react-vendor";
            if (id.includes("lucide-react")) return "icons-vendor";
            return "vendor";
          }
          if (id.includes("/src/pages/")) return "pages";
          if (id.includes("/src/components/")) return "components";
          if (id.includes("/src/lib/")) return "routes";
          if (id.includes("/src/seo/")) return "seo";
          if (id.includes("/data/content/")) return "content";
          return undefined;
        },
      },
    },
  },
});
