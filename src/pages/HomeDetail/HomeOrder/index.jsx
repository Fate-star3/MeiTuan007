import React, { useState, useEffect} from 'react'
import { Wrapper,EnterLoading } from './style'
import { getGoodsList } from './store/actionCreators'
import { connect } from 'react-redux'
// 组件
import Scroll from '@/components/common/Scroll'
import ShoppingCart from '@/components/ShoppingCart'
// 图片延迟加载
import LazyLoad, { forceCheck } from 'react-lazyload'
import Loading from '@/components/common/loading'
function HomeOrder(props) {

  const { goods:details, loading } = props
  const { getGoodsListDispatch } = props
  console.log(details);
  useEffect(() => {
    getGoodsListDispatch()
  }, [])
  const sideBarList = () => {
    return details.map((item, index) => {
      return (
        <li className="menu-item" key={index} >
          <div className="text">
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
        <li className="food-list food-list-hook" key={index}>
          <h3 className="title">{item.name}</h3>
          {/* <!-- 具体的商品列表 --> */}
          <ul>
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
                          {false &&
                            <span className="price-right_reduce">
                              <span className="reduce-box">
                              </span>
                            </span>}
                          <span className="price-right_num">{item.praise_num}</span>
                          <span className="price-right_add" >
                            <span className="reduce-box">
                            </span>
                          </span>
                        </div>
                      </div>

                    </div>
                    <div className="cartcontrol-wrapper">

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
          <ul>
            {goodsContent()}
          </ul>
        </div>
      </div>
      <ShoppingCart/>
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
  return {
    goods: state.goods.GoodsList,
    loading: state.goods.Loading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getGoodsListDispatch() {
      dispatch(getGoodsList())
    },


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeOrder)