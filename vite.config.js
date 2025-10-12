import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json']
  },
  
  server: {
    port: 8080,
    open: false
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name].[hash].js',
        entryFileNames: 'static/js/[name].[hash].js',
        assetFileNames: 'static/[ext]/[name].[hash].[ext]'
      }
    }
  },
  
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
})