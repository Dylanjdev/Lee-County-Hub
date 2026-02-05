// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Lee-County-Hub/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
        },
      },
    },
    // Minify for production
    minify: 'esbuild',
    // Generate source maps for debugging (disable in production if not needed)
    sourcemap: false,
    // Target modern browsers for better performance
    target: 'es2015',
    // Improve chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

