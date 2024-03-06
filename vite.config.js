import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/dasParfum/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/scss/main.scss';
          @import './src/scss/color.scss';
          @import './src/scss/mixin.scss';
        `,
      }
    }
  }
})
