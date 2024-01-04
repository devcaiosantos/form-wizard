// vite.config.ts
import { defineConfig, UserConfig,loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }: { mode: string }): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],

    server: {
      port: parseInt(process.env.VITE_PORT || '3000'), // Definindo um valor padrão caso VITE_PORT não esteja definido
    },
  });
};