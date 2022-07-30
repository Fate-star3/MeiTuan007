import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'
import classnames from 'classnames'

function ShoppingCart(props) {
    const { cartNumber, clearCart, singleCart } = props
    const [visible, setVisible] = useState(false)
    let list = []
    let arr = []
    singleCart.forEach((item, index) => {
        if (index % 2 == 0) {
            list.push(item)
        }

    })
    for (let i = 0; i < list.length; i++) {
        if (arr.includes(list[i].id)) {
            list.splice(i,1)
            i--
        }else {
            arr.push(list[i].id)
        }
        
    }
    let price =  list.reduce((pre,curr) => pre + (curr.praise_num*curr.min_price ) ,0)
//    list =[] && window.sessionStorage.getItem("list") ? list = window.sessionStorage.getItem("list") : (window.sessionStorage.list = [...list])

    const cartVisible = () => {
        setVisible(!visible)
    }

    const clear = () => {
        clearCart()
        cartVisible()
        document.querySelector('.cart-content-btn').classList.remove('cart-bg')
        document.querySelector('.cart-content-ft').classList.remove('cart-bg-ft')
    }
    return (
        <Wrapper>
            <div className="cart" id="cart">
                {
                    (list.length > 0 && visible) &&
                    <div>
                        <div className="modal">
                            <div className="modal-content">
                                <div>
                                    <div className="modal-box" onClick={() => cartVisible()} >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cartDetail">
                                <div className="cartDetail-discount">
                                    <span className="cartDetail-discount-desc" >折扣已减20元</span>
                                    <span className="cartDetail-discount-box" ></span>
                                </div>
                                <div >
                                    <div className="cartDetail-title">
                                        <span className="cartDetail-title-left">购物车</span>
                                        <span className="cartDetail-title-right" onClick={() => clear()}>清空购物车</span>
                                    </div>
                                    <div>
                                        {
                                            list.map((item, index) => {
                                                return (
                                                    <div className="cartDetail-content" style={{ overflow: "hidden" }} key={item.id}>
                                                        <div>
                                                            <div className="cartDetail-content-v2">
                                                                <img className="cartDetail-content-pic" src={item.picture} />
                                                                <div className="cartDetail-content-v3">
                                                                    <div className="cartDetail-content-hd">
                                                                        <div className="cartDetail-content-desc">{item.name}</div>
                                                                        <div className="cartDetail-content-count">(1人份)、1人份</div>
                                                                    </div>
                                                                    <div className="cartDetail-content-bd">
                                                                        <span className="cartDetail-content-icon">¥</span>
                                                                        <span className="cartDetail-content-price">{item.min_price * item.praise_num}</span>
                                                                        <span className="cartDetail-content-discount">¥{45 * item.praise_num}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="cartDetail-content-ft">
                                                                    <div className="cartDetail-content-ftv2 cartDetail-content-ftv3">
                                                                        <span className="cartDetail-content-ftbox" >
                                                                            <span className="cartDetail-content-ftboxv2"></span>
                                                                        </span>
                                                                        <span className="cartDetail-ft-count">{item.praise_num}</span>
                                                                        <span className="cartDetail-ft-box" >
                                                                            <span className="cartDetail-content-ftboxv2"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                        <div className="cartDetail-bundle">
                                            <span className="cartDetail-bundle-name">打包费</span>
                                            <span className="cartDetail-bundle-symbol">¥</span>
                                            <span className="cartDetail-bundle-count">{list.length*2}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                }

                {/* 购物车 */}
                <div className="cart-title cart-title-v2">
                    <div>满32减20;满50减28;满69减30;满89减39</div>
                </div>
                <div className="cart-content">
                    <div role="button" className={classnames({ "cart-bg": list.length > 0 }, "cart-content-btn")} onClick={() => cartVisible()} >
                        {list.length > 0 && <div className="cart-content-icon cart-content-iconv2">{cartNumber()}</div>}
                    </div>

                    <div className="cart-content-mid">
                        {
                            list.length > 0 &&
                            <div className="cart-content-priceAll">
                                <span className="priceAll-left">
                                    <span className="priceAll-left-icon">¥</span>
                                    {price}
                                </span>
                                <span className="priceAll-left-right">¥58.79</span>
                            </div>
                        }
                        <div className="cart-content-txt cart-content-txtv2">预估另需配送费 ¥1.1
                            <span className="cart-content-price">¥4.6</span>
                        </div>
                    </div>
                    <Link to='/mine'>
                        <div className={classnames({ "cart-bg-ft": list.length > 0 }, "cart-content-ft")}>{list.length ? '去结算' : '¥20起送'}</div>
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}
export default ShoppingCart