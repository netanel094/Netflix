import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/3": {
        target: "http://api.themoviedb.org",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
