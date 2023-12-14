import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




export default defineConfig({
  base: "/restaurant-app/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this value based on your needs
  },
})

