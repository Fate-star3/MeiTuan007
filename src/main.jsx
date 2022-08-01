import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter,BrowserRouter } from 'react-router-dom'
// 引入初始化css样式文件
import '@/styles/reset.css'
// 引入字体图标
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.min.css'
// 使用redux
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>   
        <App />
    </HashRouter>
  </Provider>

)
