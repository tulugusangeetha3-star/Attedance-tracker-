import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0"
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: ["attedance-tracker-3.onrender.com"]
  }
})
