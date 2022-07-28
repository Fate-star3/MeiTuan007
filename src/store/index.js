// 1. 管理数据  创建一个仓库  createStore
// 2. 模块化管理数据  多个reducer
// 3. 修改数据？
// dispatch({action：})
// 重新计算reducer
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
// 组件 中间件redux-thunk    数据

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ))
export default store