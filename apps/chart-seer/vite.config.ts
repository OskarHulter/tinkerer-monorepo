import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/chart-seer',

  build: {
    outDir: '../../dist/apps/chart-seer',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      external: ['react-resizable', 'react-resizable/css/styles.css'],
    },
  },

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // test: {
  //   globals: true,
  //   cache: { dir: '../../node_modules/.vitest' },
  //   environment: 'jsdom',
  //   include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  // },
});
