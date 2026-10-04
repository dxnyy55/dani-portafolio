import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hobbies: resolve(__dirname, 'pages/hobbies.html'),
        sobreMi: resolve(__dirname, 'pages/sobre-mi.html'),
        proyectos: resolve(__dirname, 'pages/proyectos.html'),
      },
    },
  },
});