import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vite.dev/config/
export default defineConfig({
  base: "/russell-web/",
  plugins: [react(), tailwindcss(), wasm(), topLevelAwait()],
  optimizeDeps: {
    exclude: ["russell_engine"],
  },
});
