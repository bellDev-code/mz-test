import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@Components',
        replacement: resolve(__dirname, 'src/Components'),
      },
      {
        find: '@Layouts',
        replacement: resolve(__dirname, 'src/Layouts'),
      },
      {
        find: '@Pages',
        replacement: resolve(__dirname, 'src/Pages'),
      },
      {
        find: '@Configure',
        replacement: resolve(__dirname, 'src/Configure'),
      },
    ],
  },
  plugins: [react(), tsconfigPaths()],
});
