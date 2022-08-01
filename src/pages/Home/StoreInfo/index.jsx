import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, EnterLoading } from './style'
// 组件
import Scroll from '@/components/common/Scroll'
import BScroll from 'better-scroll'
// 图片延迟加载
import LazyLoad from 'react-lazyload'
import { forceCheck } from 'react-lazyload'
import Loading from '@/components/common/loading'
import loadingPic from '@/assets/images/loading.gif'

const StoreInfo = (props) => {
    const { restaurants, loading } = props
    const [data = restaurants ,setData ] =useState()
    // const lazyLoad = useRef()
    useEffect(() => {
        // function callback() {
        //     const top = lazyLoad.current.getBoundingClientRect().top;
        //     const windowHeight = window.screen.height;
        //     console.log(top,windowHeight);
        //     if (top && top < windowHeight) {
        //         // 当 wrapper 已经被滚动到页面可视范围之内触发
        //         setData(() => {
        //             return data.push([...restaurants])
        //         })
                
        //     }
        // }
        // window.addEventListener('scroll', function () {
        //     if (timeCount) {
        //         clearTimeout(timeCount);
        //     }
        //    var timeCount = setTimeout(callback, 50);
        // })


    }, [])
    return (
        <Wrapper>
           
            <ul className='wrapper' >
                {
                    data.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link
                                    className='homelist'
                                    to={{
                                        pathname: `/homedetail/${item.id} `
                                    }}
                                >
                                    <div className="poilist-item" style={{ position: "relative" }}>
                                        <div className="poilist-item-icon">
                                            <LazyLoad
                                               
                                                placeholder={<img width="100%" height="100%" src={loadingPic} />}
                                            >
                                                <img className="poilist-item-icon-pic" src={item.pic} />
                                            </LazyLoad>
                                            <div className="poilist-item-icon-poitypepic">
                                                <img className="poitype-pic" src={item.pic_icon} />
                                            </div>
                                        </div>
                                        <div className="poilist-item-info">
                                            <div className="poilist-item-info1">
                                                <div className="poilist-item-info1name">{item.name}</div>
                                            </div>
                                            <div className="poilist-item-info2">
                                                <div className="poilist-item-info2left">
                                                    <span className="poi-info-txt score">{item.score}</span>
                                                    <span className="poi-info-txt">{item.sales}</span>
                                                    <span className="poi-info-txt">{item.average}</span>
                                                </div>

                                                <div className="poilist-item-info2right">
                                                </div>
                                            </div>
                                            <div className="poilist-item-info3">
                                                <div className="poilist-item-info3left">
                                                    <span className="poi-info-txt">{item.first_send}</span>
                                                    <span className="poi-info-txt no-margin-right">{item.delivery}</span>
                                                </div>
                                                <div className="poilist-item-info3right">
                                                    <span className="poi-info-txt">{item.time}</span>
                                                    <span className="poi-info-txt no-margin-right">{item.distance}</span>
                                                </div>
                                            </div>
                                            <div className="poilist-item-info4">
                                                <div className="poilist-item-info4item">
                                                    <div className="poilist-item-info4itemtxt">
                                                        <img className="info4-item-txtlefticon" src={item.info_icon} />
                                                        <span className="info4-item-txt" style={{ color: "rgb(155, 118, 56)", backGroundColor: "rgb(255, 255, 255) " }}>{item.info_text}</span>
                                                    </div>
                                                </div>
                                                <div className="poilist-item-info4item">
                                                    <div className="poilist-item-info4itemtxt">
                                                        <img className="info4-item-txtlefticon" src={item.info_icon2} />
                                                        <span className="info4-item-txt" style={{ color: "rgb(255, 128, 0)", backGroundColor: "rgb(255, 255, 255)" }}>{item.info_text2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="poilist-item-info5 more-icon-need">
                                                <div className="d_cmm-label-comp-wrap">
                                                    <div className="d_sublabel-container d_multi-line">
                                                        <div className="d_sublabel-block">
                                                            <div className="d_sublabel" style={{ borderColor: "rgb(255, 217, 178)" }}>
                                                                <div className="d_lb-wrap">
                                                                    <div className="d_lb" style={{ color: "rgb(255, 128, 0)", backGroundColor: "rgb(255, 255, 255)" }}>{item.desc1}<span>
                                                                    </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d_sublabel" style={{ borderColor: "rgb(255, 198, 193) " }}>
                                                                <div className="d_lb-wrap">
                                                                    <div className="d_lb" style={{ color: "rgb(255, 74, 38)", backGroundColor: "rgb(255, 255, 255)" }}>{item.desc2}<span>
                                                                    </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d_sublabel" style={{ borderColor: "rgb(255, 198, 193)" }}>
                                                                <div className="d_lb-wrap">
                                                                    <div className="d_lb" style={{ color: "rgb(255, 74, 38)", backGroundColor: "rgb(255, 255, 255)" }}>{item.desc3}
                                                                        <span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
               {/* <div className="loadMore" ref={lazyLoad}>加载更多</div> */}
            </ul>
            {
                loading ?
                    <EnterLoading>
                        <Loading></Loading>
                    </EnterLoading> : null
            }
           
        </Wrapper>

    )
}


export default StoreInfo
