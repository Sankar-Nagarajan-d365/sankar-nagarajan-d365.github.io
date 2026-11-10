import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site (sankar-nagarajan-d365.github.io) is served from the domain root, so base is '/'.
// If you ever move this to a project repo (username.github.io/repo-name), change base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
