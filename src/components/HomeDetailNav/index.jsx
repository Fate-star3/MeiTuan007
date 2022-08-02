import React, { useEffect, memo } from 'react'
import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './style'

function HomeDetailNav({ id }) {

    // 页面二级路由的导航准备
    let homeNavs = [
        { id: 1, desc: '点餐', path: '/order' },
        { id: 2, desc: '评价', path: '/comment' },
        { id: 3, desc: '商家', path: '/business' },
    ]
    return (
        <Wrapper>
            <div className="navbar">
                <div className="nav-box ">
                    {
                        homeNavs.map((item, index) => {
                            return (
                                <NavLink
                                    index={index}
                                    to={`/homedetail/${id}${item.path}`}
                                    key={item.id}
                                    className="nav-item "
                                >
                                    {item.desc}
                                </NavLink>
                            )
                        })
                    }
                    <div id="menuSearch" className="navbar-searchbox" style={{ width: "57px" }}>
                        <input type="search" name="" id="" />
                        <div className="searchbox-content">
                            <div className="searchbox-content-icon">
                            </div>
                            <div className="searchbox-content-search" id="menuSearchText" style={{ display: "block" }}>搜索</div>
                            <div className="searchbox-content-desc" id="menuSearchTextExpand" style={{ display: "none" }}>请输入菜品名称</div>
                        </div>
                    </div>
                </div>


            </div>
        </Wrapper>
    )
}

HomeDetailNav.propTyes = {
    id: propTyes.string.isRequired
}
export default memo(HomeDetailNav)