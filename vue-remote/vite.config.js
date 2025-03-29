import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Fix for top-level await
    cssCodeSplit: false,
  },
  plugins: [
    vue({
      // customElement: true, // Uncomment to use web components
    }),
    vueJsx(),
    vueDevTools(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './LocalCounter': './src/components/LocalCounter.vue',
        './RemoteApp': './src/RemoteApp.js',
        './WcLocalCounter': './src/web-components/WcLocalCounter.js',
      },
      shared: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
