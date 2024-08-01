import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add the extensions you use
    alias: {
      "@acc/api": "http://localhost:4174/src/acc-api.ts"
    }
  },
  build: {
    rollupOptions: {
      input: "src/acc-orders.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react()],
  server: {
    host: "localhost",
    port: 4173
  }
});
