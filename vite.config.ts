// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { DepOptimizationOptions } from 'vite'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    assetsInclude: '**/*.md',
  } as DepOptimizationOptions, // Correção do tipo
  esbuild: {},
})
