import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      base:"/repository-name/",

      outDir: 'build',
    },
    plugins: [react()],
  };
});