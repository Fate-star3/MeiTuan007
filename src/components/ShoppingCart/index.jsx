import React, { useState } from 'react'
import { Wrapper } from './style'

function ShoppingCart() {
    const [visible, setVisble] = useState(false)
    return (
        <Wrapper>
            <div className="cart" id="cart">
                {
                    visible &&
                    <div>
                        <div className="modal">
                            <div className="modal-content">
                                <div>
                                    <div className="modal-box"onClick={() => setVisble(!visible)} >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cartDetail" style={{ transition: "transform 200ms ease 0s", transform: "translateY(0px)" }}>
                                <div className="cartDetail-discount">
                                    <span className="cartDetail-discount-desc" >折扣已减20元</span>
                                    <span className="cartDetail-discount-box" ></span>
                                </div>
                                <div >
                                    <div className="cartDetail-title">
                                        <span className="cartDetail-title-left">购物车</span>
                                        <span className="cartDetail-title-right">清空购物车</span>
                                    </div>
                                    <div>
                                        <div className="cartDetail-content" style={{ overflow: "hidden" }}>
                                            <div>
                                                <div className="cartDetail-content-v2">
                                                    <img className="cartDetail-content-pic" src="http://p1.meituan.net/wmproduct/db0c57b78b57e35aec1d64f7b0a36b36263852.jpg" />
                                                    <div className="cartDetail-content-v3">
                                                        <div className="cartDetail-content-hd">
                                                            <div className="cartDetail-content-desc">【干饭魂】吃货六件套</div>
                                                            <div className="cartDetail-content-count">(1人份)、1人份</div>
                                                        </div>
                                                        <div className="cartDetail-content-bd">
                                                            <span className="cartDetail-content-icon">¥</span>
                                                            <span className="cartDetail-content-price">25.9</span>
                                                            <span className="cartDetail-content-discount">¥45.9</span>
                                                        </div>
                                                    </div>
                                                    <div className="cartDetail-content-ft">
                                                        <div className="cartDetail-content-ftv2 cartDetail-content-ftv3">
                                                            <span className="cartDetail-content-ftbox" >
                                                                <span className="cartDetail-content-ftboxv2"></span>
                                                            </span>
                                                            <span className="cartDetail-ft-count">1</span>
                                                            <span className="cartDetail-ft-box" >
                                                                <span className="cartDetail-content-ftboxv2"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cartDetail-bundle">
                                                    <span className="cartDetail-bundle-name">打包费</span>
                                                    <span className="cartDetail-bundle-symbol">¥</span>
                                                    <span className="cartDetail-bundle-count">2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="cart-title cart-title-v2">
                    <div>满32减20;满50减28;满69减30;满89减39</div>
                </div>
                <div className="cart-content">
                    <div role="button" className="cart-content-btn" onClick={() => setVisble(!visible)} ></div>
                    <div className="cart-content-txt cart-content-txtv2">预估另需配送费 ¥1.1
                        <span className="cart-content-price">¥4.6</span>
                    </div>
                    <div className="cart-content-ft">¥20起送</div>
                </div>
            </div>
        </Wrapper>
    )
}
export default ShoppingCart