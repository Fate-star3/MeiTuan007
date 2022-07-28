import React from 'react'
import {Wrapper }from './style'

function SearchContent() {
    return (
       <Wrapper>
         <div className="search-content">
            <div className="search-content-box">
                <nav className="search-content-nav">热门搜索</nav>
                <section className="search-content-link">
                    <a className="search-content-hots">烧烤</a>
                    <a className="search-content-hots">饺子</a>
                    <a className="search-content-hots">奶茶</a>
                    <a className="search-content-hots">古茗</a>
                    <a className="search-content-hots">炸鸡</a>
                    <a className="search-content-hots">麻辣烫</a>
                    <a className="search-content-hots">螺狮粉</a>
                    <a className="search-content-hots">一点点</a>
                    <a className="search-content-hots">华莱士</a>
                    <a className="search-content-hots">古茗奶茶</a>
                    <a className="search-content-hots">蜜雪冰城</a>
                    <a className="search-content-hots">茶百道</a>
                    <a className="search-content-hots">正新鸡排</a>
                    <a className="search-content-hots">肯德基</a>
                    <a className="search-content-hots">麦当劳</a>
                </section>
            </div>
        </div>
       </Wrapper>
    )
}
export default SearchContent