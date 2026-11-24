import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' → chemins relatifs, fonctionne tel quel sur GitHub Pages
export default defineConfig({
  base: './',
  plugins: [react()],
});
