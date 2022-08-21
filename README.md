# Redux持久化插件-解决刷新页面数据丢失问题

>最近在使用react的时候有用到redux，对数据进行全局的状态管理，但是发现和vuex一样会出现刷新之后数据丢失的问题，于是在github上面查阅了 redux-persist 插件，使用redux-persist进行持久化数据存储 。

>通常我们会使用sessionStorage或者localStorage来进行数据存储，但既然我们使用了redux来管理和存储全局数据，此时再使用sessionStorage或者localStorage存储，感觉会本末倒置，而且还增加了工作量。
这个时候 **redux-persist，**满足你的需求，它结合redux将store中的数据缓存到浏览器的sessionStorage或者localStorage中


 #### redux-persist持久化插件
1. 安装
    npm iredux-persist --save

2. 在store.js里面引入，存储到storageSession
3. 入口文件index.js，将PersistGate标签作为父标签
    ```
        import { createStore } from 'redux';
        import reducer from './reducer';
        import { persistStore, persistReducer } from 'redux-persist';
        //  存储机制，可换成其他机制，当前使用sessionStorage机制
        import storageSession from 'redux-persist/lib/storage/session';
        // import storage from 'redux-persist/lib/storage'; //localStorage机制
        //import { AsyncStorage } from 'react-native'; //react-native
        // 数据对象
        const storageConfig = {
          key: 'root', // 必须有的
          storage: storageSession, // 缓存机制
          blacklist: [], // reducer 里不持久化的数据,除此外均为持久化数据
        };

        const myPersistReducer = persistReducer(storageConfig, reducer);
        const store = createStore(myPersistReducer);
        export const persistor = persistStore(store);
        export default store;

        // const configureStore = () => createStore(reducer);
        // export default configureStore;
    ```
```
import React, { useState, useEffect } from 'react';
import { Menu, HomeHeader } from '@/components';
import './index.less';
// 状态
// import store from '@/store/index';
import { useLocation } from 'umi';
import { Provider } from 'react-redux';
import store from '../store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configStore from '../store/index';
import { persistor } from '../store/index';
// 页面刷新本地仓库数据不消失
 
function BasicLayout(props) {
  const location = useLocation();
  const paths = ['/login'];
 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="lay">
          <div className="left_container">
            <Menu
              show={paths.includes(location.pathname)}
              pathname={location.pathname}
            ></Menu>
          </div>
 
          <div className="right_container">
            <HomeHeader
              show={paths.includes(location.pathname)}
              pathname={location.pathname}
            ></HomeHeader>
            {props.children}
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
 
export default BasicLayout;
```
最后，这样就完成了通过redux-persist实现redux持久化本地数据存储。




### 5.2 在父组件中展示
在父组件中使用Outlet来显示匹配到的子组件

import { Outlet } from "react-router-dom";
function Father() {
  return (
    <div>
      // ... 自己组件的内容 // 留给子组件Child的出口
      <Outlet />
    </div>
  );
}
### 六、默认路由
定义：在嵌套路由中，如果 URL 仅匹配了父级 URL，则Outlet中会显示带有index属性的子路由。可以使用在路由的任何层级

<Routes>
  <Route path="/foo" element={Foo}>
    <Route index element={Default}></Route>
    <Route path="bar" element={Bar}></Route>
  </Route>
</Routes>
当 url 为/foo时：Foo 中的 Outlet 会显示 Default 组件
当 url 为/foo/bar时：Foo 中的 Outlet 会显示为 Bar 组件

### 七、全匹配路由
定义： path属性取值为*时，可以匹配任何（非空）路径，该匹配拥有最低的优先级。可以用于设置 404 页面。
  ```
  <Routes>
  <Route path="/foo" element={Foo}>
    <Route path="bar" element={Bar}></Route>
    <Route path="*" element={NotFound}></Route>
  </Route>
  </Routes>
```

### 九、路由重定向
当在某个路径/a下，要重定向到路径/b时，可以通过Navigate组件进行重定向到其他路径

等价于以前版本中的Redirect组件
```
    import { Navigate } from "react-router-dom";
  function A() {
    return <Navigate to="/b" />;
  }
```

### 十一、订阅和操作 history stack的原理
浏览器会记录导航堆栈，以实现浏览器中的前进后退功能。在传统的前端项目中，URL的改变意味着向服务器重新请求数据。

在现在的客户端路由（ client side routing ）中，可以做到编程控制URL改变后的反应。如在点击a标签的回调函数中使用 event.preventDefault() 阻止默认事件，此时URL的改变不会带来任何UI上的更新。
```
<a
  href="/contact"
  onClick={(event) => {
    // stop the browser from changing the URL and requesting the new document
    event.preventDefault();
    // push an entry into the browser history stack and change the URL
    window.history.pushState({}, undefined, "/contact");
  }
/>
```
#  首页 
- 城市选择组件和Cities页面级路由
- 搜索组件 和 Search路由
- banners组件
- setMeal轮播图组件
-最后就是restaurants组件

# 商品详情
由一级路由HomeDetails 和三个二级路由组成
- HomeOrder 点餐页面 实现了购物车模块
- HomeComment 评价页面 实现tap切换和筛选
- HomeBussiness 店家详情

# 搜索
只有个框架，没有数据，将来实现

# 订单
未实现 

# 我的
未实现 会做注册登录 

# 结语
这个文档简单讲解了项目的大体框架， 还有许多功能要实现；也有一些小bug，ps：首页的综合排序，点击之后页面还能滑动； 购物车的数据，每个商品都有初始数量，需要先清空一下购物车；

