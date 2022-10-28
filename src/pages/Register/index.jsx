import React from 'react'
import { Wrapper } from './style'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import loginPic from '@/assets/images/登录.png'
import { useState } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const resigsterData = {
    phone: phone,
    password: password
  }
  console.log(resigsterData);
  const HandleRegister = (e) => {
    e.preventDefault()
    // axios.post('/api/users/register', resigsterData).then(res => {
    //   console.log(resigsterData);
    //   console.log(res);
    // })
    navigate('/login')

  }
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
          </div>
          <div className="password">
            <input className="codeInput"
              type="number"
              maxLength="6"
              placeholder="请输入密码"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password} />
          </div>
          <input className='btn_login' onClick={(e) => HandleRegister(e)} type='submit' value='注册'></input>
        </form>
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

export default Register