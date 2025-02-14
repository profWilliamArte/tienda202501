import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  //base: "/tienda202501/", // Usa una ruta relativa si prefieres
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Archivo principal
      },
    },
  },
});