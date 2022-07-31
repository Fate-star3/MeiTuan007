import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.join(__dirname,'src')
    }
  },
  base:'./'
//   build: {
//     index: path.resolve(__dirname, 'dist/index.html'),
//     assetsRoot: path.resolve(__dirname, 'dist'),
//     assetsSubDirectory: 'static',
//     assetsPublicPath: './',
//     productionSourceMap: false,    // npm run build 打包后，js文件会出现.map文件，文件很大很占空间，这里设置为false打包即不会出现.map文件
//     devtool: '#source-map',
//     productionGzip: false,
// }
})
