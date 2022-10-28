import React from 'react'
import { Route, Navigate } from 'react-router-dom';

// 首先路由鉴权就是在访问一个页面时判断是否需要权限
const SafeRouter = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            //判断是否登录  在登录页面登录成功的时候把用户名保存到本地
            Boolean(localStorage.getItem("isLogin")) ?
                (
                    <Component {...props} />
                )
                : (
                    <Navigate
                        to={{
                            pathname: "/login",//重定向到的网页位置
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);

export default SafeRouter