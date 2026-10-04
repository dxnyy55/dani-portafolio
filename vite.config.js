import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'pages/index.html',
        hobbies: 'pages/hobbies.html',
        sobreMi: 'pages/sobre-mi.html',
        proyectos: 'pages/proyectos.html'
      }
    }
  }
});