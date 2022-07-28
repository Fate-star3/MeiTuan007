import RoutesConfig from './routes'

import { useState, useEffect,Suspense } from 'react'


// 组件
import Header from './components/Header'
import Footer from './components/Footer'



function App() {

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div><img src="https://wimg.588ku.com/gif620/21/02/06/8be1b6a5b119d6f6011de23747842012.gif" style={{width:'200px' ,position:'fixed',top:'50%',left:'50%',transform:"translate(-50%, -50%)"}} alt="" /></div>}><RoutesConfig/></Suspense>
      <Footer />
    </div>
  )
}

export default App
