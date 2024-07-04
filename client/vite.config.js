import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3333/api',
        changeOrigin: true ,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3333/api',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//       '/v1/test': {
//         target: 'http://localhost:3333',
//         changeOrigin: true,
//       },
//     },
//   },
// });



