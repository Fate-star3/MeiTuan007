// 独立配置文件 
import { useState, lazy} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/pages/Home'
const Order = lazy(() => import('@/pages/Order'))
// const Member = lazy(() => import('@/pages/Member'))
const Mine = lazy(() => import('@/pages/Mine'))
const Cities = lazy(() => import('@/pages/Cities'))
const Search = lazy(() =>import('@/pages/Search'))
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
            <Route path="/" element={<Home /> }></Route>
            <Route path="/home" element={<Home />}></Route>
            {/* <Route path="/member" element={<Member />}></Route> */}
            <Route path="/order" element={<Order />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            <Route path="/cities" element={<Cities />}></Route>
            <Route path="/search" element={<Search/>}></Route>
                <Route path="/homedetail/:id" element={<HomeDetail />}>
                    <Route path='/homedetail/:id/order' element={<HomeOrder/>}></Route>
                    <Route path='/homedetail/:id/comment' element={<HomeComment/>}></Route>
                    <Route path='/homedetail/:id/business' element={<HomeBusiness/>}></Route>
                </Route>
        </Routes>
    )
}

export default RoutesConfig