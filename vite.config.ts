import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts', // Specify your entry point here
      name: 'MyLibrary', // The global variable name for UMD builds
      fileName: (format) => `my-library.${format}.ts`, // Output file names based on format
    },
    rollupOptions: {
      // Externalize dependencies
      external: ['react'], // or ['react'] for React projects
      output: {
        globals: {
          react: 'React', // or 'React' for React projects
        },
      },
    },
  },
})
