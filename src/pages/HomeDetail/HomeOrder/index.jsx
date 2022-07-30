import React, { useState, useEffect ,useRef} from 'react'
import { Wrapper, EnterLoading } from './style'
import {
  getGoodsList,
  changeGoodsNumAction,
  changeGoodsAllNumAction
} from './store/actionCreators'
import { connect } from 'react-redux'
import {menuBgChange} from '@/api/utils.js'
// 组件
import Scroll from '@/components/common/Scroll'
import ShoppingCart from '@/components/ShoppingCart'
// 图片延迟加载
import LazyLoad, { forceCheck } from 'react-lazyload'
import Loading from '@/components/common/loading'

function HomeOrder(props) {
  const {
    goods: details,
    loading,
    price,
    singleCart } = props
  // console.log(singleCart);
  const {
    getGoodsListDispatch,
    changeGoodsNumDispatch,
    changeGoodsAllNumDispatch } = props

  // console.log(details);

  useEffect(() => {
    getGoodsListDispatch()
    
  }, [])
 

  // 商品数量加减
  const changeGoodNum = (e, status, id) => {
    e.preventDefault();
    e.stopPropagation();
    let data = {
      status: status,
      id: id
    }
    changeGoodsNumDispatch(data)
  }
  // 点击 获取右侧商品的id 然后scrollIntoView事件方法滚动到对应位置
  const scrollToAnchorLeft = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName)
      // console.log(anchorElement.scrollTop);
      // console.log(anchorElement);
      anchorElement && anchorElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
    return true
  }
  const cartNumber = () => {
    let num = 0
    details.map((item) => {
      if (item.name != '热销') {
        item.spus.map((ele) => {
          num += ele.praise_num
        })
      }
    })
    return num
  }
  const clearCart = () => {
    changeGoodsAllNumDispatch()
  }

  const sideBarList = () => {
    return details.map((item, index) => {
      let num = 0
      item.spus.map((ele) => {
        num += ele.praise_num
      })

      return (
        <li className="menu-item" key={index} onClick={(e) => { scrollToAnchorLeft(item.name)&& menuBgChange()}} >
          <div className="text" >
            {num > 0 && <div className="menu-item-icon menu-item-iconv2">{num}</div>}
            <img src={item.icon ? item.icon : ''} style={{ width: "15px" }} />
            {item.name}
          </div>
        </li>
      )
    })
  }
  const goodsContent = () => {
    return details.map((item, index) => {
      return (
        <li className="food-list food-list-hook" key={index} id={item.name}>
          <h3 className="title">{item.name}</h3>
          {/* <!-- 具体的商品列表 --> */}
          <ul >
            {
              item.spus.map((item) => {
                return (
                  <li className="food-item" key={item.id}>
                    <div className="icon">
                      <img src={item.picture} alt="" />
                    </div>
                    <div className="content">
                      <h3 className="name">{item.name}</h3>
                      <div className="desc" >{item.description}</div>
                      <div className="extra">
                        <span className="saled">{item.month_saled_content}</span>
                        <span className="praise">{item.praise_content}</span>
                      </div>
                      <div className="price">
                        <div>
                          <span className="text">${item.min_price}</span>
                          <span className="unit">/{item.unit}</span>
                        </div>
                        <div className="price-right" >
                          {item.praise_num > 0 &&
                            <span className="price-right_reduce">
                              <span className="reduce-box" onClick={(e) => changeGoodNum(e, 'reduce', item.id)}>
                              </span>
                            </span>
                          }
                          <span className="price-right_num">{item.praise_num ? item.praise_num : ''}</span>
                          <span className="price-right_add" >
                            <span className="add-box" onClick={(e) => changeGoodNum(e, 'add', item.id)}>
                            </span>
                          </span>
                        </div>
                      </div>

                    </div>
                  </li>
                )
              })
            }
          </ul>
        </li>
      )
    })

  }
  return (
    <Wrapper>
      <div className="goods">
        {/* 侧边栏 */}
        <div className="menu-wrapper" >
          <ul>
            {sideBarList()}

          </ul>
        </div>
        {/* <!--商品列表--> */}
        <div className="foods-wrapper" >
          <ul className='food-container'>
            {goodsContent()}
          </ul>
        </div>
      </div>
      <ShoppingCart
        price={price}
        cartNumber={cartNumber}
        clearCart={clearCart}
        singleCart={singleCart} />
      {
        loading ?
          <EnterLoading>
            <Loading></Loading>
          </EnterLoading> : null
      }
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  let arr = []
  state.goods.GoodsList.forEach((item) => {
    if (item.name != '热销') {
      item.spus.forEach((item) => {
        let price = 0
        price += (item.praise_num > 0 ? item.min_price * item.praise_num : 0)
        arr.push(price)
      })
    }
  })


  return {
    goods: state.goods.GoodsList,
    loading: state.goods.Loading,
    singleCart: state.goods.SingleCart,
    price: arr.reduce((pre, curr) => pre += curr, 0)


  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getGoodsListDispatch() {
      dispatch(getGoodsList())
    },
    changeGoodsNumDispatch(data) {
      dispatch(changeGoodsNumAction(data))
    },
    changeGoodsAllNumDispatch(data) {
      dispatch(changeGoodsAllNumAction(data))
    },


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeOrder)