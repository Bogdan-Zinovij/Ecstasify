import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      proxy: {
        [env.VITE_API_URL]: {
          target: env.VITE_API_HOST,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  });
};
