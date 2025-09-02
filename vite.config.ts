import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: { outDir: 'dist' },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});