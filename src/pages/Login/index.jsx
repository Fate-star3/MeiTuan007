import React from 'react'
import { Wrapper } from './style'
import loginPic from '@/assets/images/登录.png'

const Login = () => {
  return (
    <Wrapper>
      <div className="login">
        <div className="pic">
          <img src={loginPic} alt="" />
        </div>
        <div className="form">
          <div className="phone">
            <input class="phoneNumInput" id="phoneNumInput" type="tel" autocomplete="off" placeholder="请输入手机号" maxlength="11" />
            <div class="sendCodeBtn" id="sendCodeBtn">
              <span >发送验证码</span>
            </div>
          </div>
          <div className="password">
            <input class="codeInput" id="codeInput" type="number" maxlength="6" autocomplete="off" placeholder="请输入短信验证码" />
          </div>
          <button className='btn_login'>登录</button>
        </div>
        <div className="license">
          <div className="icon">
            <i></i>
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