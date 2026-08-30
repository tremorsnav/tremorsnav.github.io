
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tremorsnav.github.io', // Reemplaza por tu usuario de GitHub

  vite: {
    plugins: [tailwindcss()]
  }
});