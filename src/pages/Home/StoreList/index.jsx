import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './style'
import { isFixed } from '@/api/utils'

export default function index(props) {
    const [show, setShow] = useState(true)
    const listRef = useRef()
    const { methods, containerRef } = props
    const [toTop, setToTop] = useState('none')
    const backTop = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        isFixed(".kk-filter-wrapper", 250)

    }, [])

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let height = window.innerHeight / 2
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop > height) {
                setToTop('block')
            } else {
                setToTop('none')
            }
        })

    }, [toTop])
    const modal = () => {
        methods(show)
        setShow(!show)
        if (show) {
            listRef.current.classList.add('fixed')
            containerRef.current.classList.add('fixed')
          
        } else {
            listRef.current.classList.remove('fixed')
            containerRef.current.classList.remove('fixed')
        }

    }
    return (
        <Wrapper>
            <div className="kk-filter-wrapper" ref={listRef}>
                <div className="com-filter" id="m-filter-wrapper-nosticky" style={{ height: "auto" }}>
                    <div className="filter-wrapper" id="m-filter-wrapper-sticky" style={{ top: "auto" }}>
                        <div className="m-filter-out">
                            <div className="out-wrapper">
                                <div className="out-item-left">
                                    <div className="out-item-info" onClick={() => modal()}>

                                        <div className="out-item-info-tit">综合排序</div>
                                        <img className="out-item-info-titarrow" src="https://p0.meituan.net/travelcube/c031c9628ddd446e8c7635535297acda228.png" />


                                    </div>
                                </div>
                                <div className="out-item-center"></div>
                                <div className="out-item-right">
                                    <div className="out-item-info">
                                        <img className="out-item-info-titarrow" src="https://p0.meituan.net/travelcube/c031c9628ddd446e8c7635535297acda228.png" />
                                        <div className="out-item-info-tit">全部筛选</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-filter-quick">
                            <div className="quick-wrapper">
                                <div className="quick-item">
                                    <div className="quick-item-hidebar">
                                        <div className="quick-item-tit">
                                            <div className="quick-item-tittxt">点评高分</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="quick-item">
                                    <div className="quick-item-hidebar">
                                        <div className="quick-item-tit">
                                            <div className="quick-item-tittxt">优惠商家</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="quick-item">
                                    <div className="quick-item-hidebar">
                                        <div className="quick-item-tit">
                                            <div className="quick-item-tittxt">满减优惠</div>
                                        </div></div></div>
                                <div className="quick-item">
                                    <div className="quick-item-hidebar">
                                        <div className="quick-item-tit">
                                            <div className="quick-item-tittxt">品牌商家</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="back_top" onClick={backTop} style={{ display: toTop }}>
                <i className="fa fa-angle-double-up"></i>
            </div>
        </Wrapper>
    )
}
