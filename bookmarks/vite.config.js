import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { chromeExtension } from 'rollup-plugin-chrome-extension'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true
  },
  plugins: [react(), chromeExtension()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')  //fetches are /api/login etc etc
      }
    }
  }
})

