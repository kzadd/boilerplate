import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint2'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig as defineVitestConfig } from 'vitest/config'

/**
 * Vite configuration
 */
const viteConfig = defineConfig({
  base: process.env.VITE_APP_BASE_URL ?? '/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        manualChunks: {
          redux: ['@reduxjs/toolkit', 'react-redux'],
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    sourcemap: process.env.VITE_APP_ENVIRONMENT !== 'prod'
  },
  optimizeDeps: {
    include: ['@reduxjs/toolkit', 'axios', 'react', 'react-dom', 'react-redux', 'react-router-dom']
  },
  plugins: [eslint(), react(), svgr(), tsconfigPaths()],
  server: {
    port: parseInt(process.env.VITE_APP_PORT ?? '3000', 10)
  }
})

/**
 * Vitest configuration
 */
const vitestConfig = defineVitestConfig({
  test: {
    // coverage: {
    //   exclude: [
    //     '**/*.actions.ts',
    //     '**/*.adapter.ts',
    //     '**/*.config.*',
    //     '**/*.d.ts',
    //     '**/*.entity.ts',
    //     '**/*.hook.ts',
    //     '**/*.reducer.ts',
    //     '**/*.repository.ts',
    //     '**/*.service.ts',
    //     '**/*.types.ts',
    //     '**/__mocks__/**',
    //     '**/__tests__/**',
    //     '**/constants/**',
    //     '**/index.*',
    //     '**/middlewares/**',
    //     '**/routing/**',
    //     '**/state/**',
    //     'coverage/**',
    //     'dist/**',
    //     'node_modules/**',
    //     'public/**'
    //   ]
    // },
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: resolve(__dirname, './src/__tests__/tests.config.ts')
  }
})

export default mergeConfig(viteConfig, vitestConfig)
