import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  },
  resolve: {
    alias: {
      "/@/core": "/src/core",
      "/@/components": "/src/components",
      "/@/hooks": "/src/hooks"
    }
  }
})
