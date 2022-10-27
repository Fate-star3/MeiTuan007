import styled from 'styled-components'

export const Wrapper = styled.div`
  .login {
    width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    overflow:hidden;
    .pic {
      margin: 66px auto;
      text-align:center;
     img {
      width: 66px;
      height: 66px;
     }
    }
    .form {
      width: 100%;
    padding: 1.2em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

      .phone {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e5e5e5;
    padding: 0.6em 0;
    height: 1.4em;
    align-items: center;
    .phoneNumInput {
      height: 100%;
    box-sizing: border-box;
    padding-top: 0;
    flex: 1;
    border: 0;
    min-width: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-size:16px;
    outline: none;
    }
    .sendCodeBtn {
      margin-left: 0.5em;
    font-size: 16px;
    color: #000;
    align-items: center;
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

      }

      .password {
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 1em;
    padding: 0.6em 0;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    user-select: none;
    .codeInput {
    flex: 1;
    width: 100%;
    border: 0;
    min-width: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-size: 16px;
    outline: none;
    }

      }
      .btn_login {
        margin-top: 20px;
        text-align: center;
    color: #666;
    background: #e5e5e5;
    height: 2.6em;
    line-height: 2.6em;
    border-radius: 0.3em;
    width: 100%;
    display: block;
    border: none;
    cursor: pointer;
    font-size: 1em;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
    }
    .license {
      display:flex;
      .icon {
        display: inline-block;
        min-width: 10%;
        margin: 0 10px 0 10px;
    i {
        display: inline-block;
    border: 1px solid #ccc;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    margin: 2px 10px;
      }
      }
    
      .text {
        font-weight: 400;
        color: rgba(0,0,0,.5);
        font-size:12px !important;
        margin-right: 20px;
      }
    }
  }
`