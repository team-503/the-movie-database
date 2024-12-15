import path from 'path'
import react from '@vitejs/plugin-react'
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000,
        strictPort: true,
    },
    preview: {
        port: 3000,
        strictPort: true,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [react(), MagicRegExpTransformPlugin.vite()] as any,
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
