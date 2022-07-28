import React, { useEffect } from 'react'
import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './style'

export default function HomeDetailNav({ id }) {

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
                    <div id="menuSearch" className="_2eXeTl_BESb4iT-0WlHcaG" style={{width:"57px"}}>
                        <input type="search" name="" id="" />
                        <div className="hPfx1lboARt57b7-TmUkf">
                            <div className="_2TpbiU8xb0dZksC63RzV_R">
                            </div>
                            <div className="_14y9Nh9BIFkJnO0qrwNtcU" id="menuSearchText" style={{ display: "block" }}>搜索</div>
                            <div className="RfVKwPPkC35EzrFFx8Waz" id="menuSearchTextExpand" style={{ display: "none" }}>请输入菜品名称</div>
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
