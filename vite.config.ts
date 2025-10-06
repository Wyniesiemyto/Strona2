import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import { VitePWA } from 'vite-plugin-pwa'; // DODAJ

export default defineConfig(({ mode }) => ({
  base: './',               // <-- tutaj dodaj 'base'
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: null,
      srcDir: 'src',
      filename: 'service-worker.ts',
      injectManifest: {
        swSrc: 'src/service-worker.ts',
      },
      includeAssets: ['favicon.ico', 'logo.png', '*.svg'],
      manifest: {
        name: 'WyniesiemyTo - Przeprowadzki Żory',
        short_name: 'WyniesiemyTo',
        description: 'Profesjonalne przeprowadzki i wywóz śmieci w Żorach',
        theme_color: '#ea580c',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          supabase: ['@supabase/supabase-js']
        }
      }
    }
  }
}))