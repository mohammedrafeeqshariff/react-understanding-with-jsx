import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      base:"/react-understanding-with-jsx/",
      outDir: 'build',
    },
    plugins: [react()],
  };
});