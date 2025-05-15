import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from "@originjs/vite-plugin-federation";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
            name: 'host-app',
            remotes: {
                remoteApp: "http://localhost:3000/assets/remoteEntry.js",
            },
            shared: ['vue']
        })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   },
  // },
})
