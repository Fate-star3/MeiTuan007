// 1. 管理数据  创建一个仓库  createStore
// 2. 模块化管理数据  多个reducer
// 3. 修改数据？
// dispatch({action：})
// 重新计算reducer
import { createStore, compose, applyMiddleware } from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
// redux 数据持久化
import { persistReducer, persistStore } from 'redux-persist'
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session';
// import storage from 'redux-persist/lib/storage'; //localStorage机制
//import { AsyncStorage } from 'react-native'; //react-native

// 数据对象
const storageConfig = {
    key: 'root', // 必须有的
    storage: storageSession, // 缓存机制
    // reducer 里不持久化的数据,除此外均为持久化数据
};
import thunk from 'redux-thunk'
import reducer from './reducer'
// 组件 中间件redux-thunk    数据
// Redux的中间件，处于Action和Reducer之间，将中间某个过程拦截一下，进行一些处理再继续正常执行，这就是中间件的功能。
// 那为什么要用到Redux中间件呢？
// 对于异步请求的代码，我们最好将它们放到Redux中间件里面。
// 然而Redux里面dispatch的过程中只允许传递对象，而不允许传递函数。于是，redux-thunk便应运而生。
// 因此，redux-thunk其实是拦截了store的dispatch方法，Redux中store.dispatch原本是不能传一个函数进去的，但是redux-thunk让dispatch拥有的
// 接受函数参数的能力。具体来说，如果dispatch方法中传递的是一个对象，那么直接按照正常的Redux工作流来运行，但如果是一个函数，那么直接执行它，
// 并把store.dispatch这个方法当作第一个参数传进这个函数。


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myPersistReducer = persistReducer(storageConfig, reducer);
const store = createStore(myPersistReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ))
// console.log(store.getState())
// 得到store下的状态分支
// business: {BusinessList: Array(0), Loading: true}
// cities: {CitiesList: Array(0)}
// comment: {CommentsList: Array(0), NavList: Array(0), Loading: true}
// goods: {GoodsList: Array(0), Loading: true, SingleCart: Array(0)}
// home: {BannersList: Array(0), RestaurantsList: Array(0), Loading: true}
// search: {enterLoading: false}
// [[Prototype]]: Object


const persistor = persistStore(store)

export default {
    store,
    persistor
}