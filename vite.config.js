import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  css: {
    // 配置 css-module
    modules: {
      // 开启 camelCase 格式变量名转换
      localsConvention: 'camelCase',
      // 类名 前缀
      generateScopedName: '[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true, // 支持内联 JavaScript
      },
    },
  },
  server: {
    host: '0.0.0.0',//使用当前的IP地址，没有这个就是以localhost作为本地地址
    port: 3000,
    proxy: {  //配置跨域
      '/api': {//当有 /api开头的地址是，代理到target地址
        target: 'http://localhost:8080',  //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true,  //允许跨域
        // rewrite: (path) => path.replace(/^\/api/, ''),//rewrite的作用就是将axios请求地址的/api去掉，如果不需要去掉api的话，不写rewrite就行。
        secure: false
      },
    }
  },
  open: true//是否在默认浏览器中自动打开该地址

})
