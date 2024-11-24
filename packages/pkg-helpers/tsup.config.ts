import { defineConfig, type Options } from 'tsup'

export default defineConfig((options: Options) => ({
    dts: true,
    clean: true,
    format: ['cjs'],
    entryPoints: ['src/index.ts'],
    ...options,
}))
