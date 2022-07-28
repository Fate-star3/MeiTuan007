import React, { useState, useEffect,memo} from 'react'
import { Link } from 'react-router-dom'
import { Wraper } from './style'

 function Banners(props) {
    const {banners} = props
    return (
        <Wraper>
            <div className="btn-banners swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {
                            banners.map((item, index) => {
                                return (
                                    <Link
                                        to='banners/detail'
                                        key={index}
                                        className="swiper-item"
                                    >
                                        <div>
                                            <p>
                                                <img src={item.image_src} />
                                            </p>
                                            <span>
                                                {item.desc}
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                </div>
              
            </div>

        </Wraper>
    )
}

export default Banners
