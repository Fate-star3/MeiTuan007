import React, { useState } from 'react'
import { Wrapper } from './style'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import loginPic from '@/assets/images/登录.png'
import { setCookie } from '../../utils/storage'

const Login = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const loginData = {
    phone: phone,
    password: password
  }
  const HandleLogin = (e) => {
    e.preventDefault()
    axios.post('/api/users/login', loginData).then(res => {
      console.log(loginData);
      console.log(res);
     
      
    })
    setCookie('usertoken','token')
    navigate('/home')
   
  }
  // action='http://127.0.0.1:8080/api/users/login'
  return (
    <Wrapper>
      <div className="login">
        <div className="pic">
          <img src={loginPic} alt="" />
        </div>
        <form className="form" method='post' >
          <div className="phone">
            <input
              className="phoneNumInput"
              type="tel"
              placeholder="请输入手机号"
              maxLength="11"
              onChange={(e) => setPhone(e.currentTarget.value)}
              value={phone} />
            <div className="sendCodeBtn" id="sendCodeBtn">
              <span >发送验证码</span>
            </div>
          </div>
          <div className="password">
            <input
              className="codeInput"
              type="password"
              maxLength="6"
              placeholder="请输入密码"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password} />
          </div>
          <input className='btn_login' onClick={(e) => HandleLogin(e)} type='submit' value='登录'></input>
        </form>
        <div className='tonext'>
          <p>还没有账号？<span onClick={() => navigate('/register')}>请先注册</span></p>
        </div>
        <div className="license">
          <div className="icon" >
            <i onClick={(e) => {
              e.currentTarget.classList.toggle('clickBG')
            }}></i>
          </div>
          <div className="text">
            我已阅读并同意<a href="https://rules-center.meituan.com/m/detail/4" style={{ color: "#3488FF" }}>《美团用户协议》、</a>
            <a href="https://rules-center.meituan.com/m/detail/2" style={{ color: "#3488FF" }}>《隐私政策》</a>
            ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Login