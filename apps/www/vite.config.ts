import path from 'path'
import react from '@vitejs/plugin-react'
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react(), MagicRegExpTransformPlugin.vite()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
    },
})
