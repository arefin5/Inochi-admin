// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@context': '/src/context', // Adjust the alias based on your project structure
    },
  },
});
