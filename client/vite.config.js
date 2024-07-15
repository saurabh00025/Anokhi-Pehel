import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "^/api/v1/user": {
        target: "http:localhost:8080",
        changeOrigin: true,
      },
    },
  },
  build: { chunkSizeWarningLimit: 4000, },
});
