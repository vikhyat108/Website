import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: '/apex-research-connect/', // Uncomment this line when deploying to GitHub Pages if the repo name matches
})
