// 独立配置文件 
import { lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SafeRouter from '@/components/SafeRouter'
import Home from '@/pages/Home'
const Order = lazy(() => import('@/pages/Order'))
const Mine = lazy(() => import('@/pages/Mine'))
const Cities = lazy(() => import('@/pages/Cities'))
const Search = lazy(() => import('@/pages/Search'))
const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))
const HomeDetail = lazy(() => import('@/pages/HomeDetail'))
const HomeOrder = lazy(() => import('@/pages/HomeDetail/HomeOrder'))
const HomeComment = lazy(() => import('@/pages/HomeDetail/HomeComment'))
const HomeBusiness = lazy(() => import('@/pages/HomeDetail/HomeBusiness'))

// Routes 不能和react-router-dom 一样
// 使用lazy动态加载组件时候报错如下
// 使用了Suspense 组件 配合lazy使用成功解决
const RoutesConfig = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/mine" element={<Mine />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/search" element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/homedetail/:id" element={<HomeDetail />}>
                <Route path='/homedetail/:id/order' index element={<HomeOrder />} />
                <Route path='/homedetail/:id/comment' element={<HomeComment />} />
                <Route path='/homedetail/:id/business' element={<HomeBusiness />} />
            </Route>
            <Route path='*' element={<Mine />} />
            {/* 默认路由
                定义：在嵌套路由中，如果 URL 仅匹配了父级 URL，则Outlet中会显示带有index属性的子路由。可以使用在路由的任何层级
                   <Routes>
                 < Route path="/foo" element={Foo}>
                   <Route index element={Default}></Route>
                   <Route path="bar" element={Bar}></Route>
                 </Route>
                /Routes>
                当 url 为/foo时：Foo 中的 Outlet 会显示 Default 组件
                当 url 为/foo/bar时：Foo 中的 Outlet 会显示为 Bar 组件 */}

        </Routes>
    )
}

export default RoutesConfig