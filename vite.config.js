import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                blog: resolve(__dirname, 'blog/index.html'),
                article1: resolve(__dirname, 'blog/expertise-verticale/index.html'),
            },
        },
    },
})
