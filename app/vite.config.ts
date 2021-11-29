import inject from '@rollup/plugin-inject'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },
  },
  define: {
    'process.env': process.env,
  },
})
