import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), svgLoader()],
  build: {
    rollupOptions: {
      external: [
        'react', // ignore react stuff
        'react-dom',
      ],
    },
  },
});
