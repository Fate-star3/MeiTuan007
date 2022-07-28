import React, { useEffect } from 'react'
import { Wrapper } from './style'
import Swiper from 'swiper'

export default function SetMeal() {
    useEffect(() => {
        // 轮播图挂载
        new Swiper('.home_info_banners', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        
            // 如果需要滚动条
            // scrollbar:{
            //     el:'.swiper-scrollbar'
            // }
        })
    }, [])
    return (
        <Wrapper>
            <div className="home_info_banners swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="https://p0.meituan.net/wmbanner/0acea4ba5704d56f13d78ad175b2cc5538158.png@602w" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://p0.meituan.net/wmbanner/c07382bf400d74f81fe7768fcde6897684199.jpg@602w" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://p0.meituan.net/wmbanner/cad13591ad0eb89515bad8cc394739d5124198.jpg@602w" alt="" />

                    </div>
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}

                {/* <!-- 如果需要滚动条 --> */}
                {/* <div className="swiper-scrollbar"></div> */}
            </div>

        </Wrapper>
    )
}
