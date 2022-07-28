import React,{useState,useEffect}from 'react'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { getBusinessList } from './store/actionCreators'


 function HomeBusiness(props) {
  const {business:list,loading} = props
  const {getBusinessListDispatch} = props
  useEffect(() => {
   getBusinessListDispatch()
  },[])
  return (
    <Wrapper>
      <div className="seller" >
        <div className="seller-wrapper">

          <div className="seller-view">
            <div className="address-wrapper">
              <div className="address-left">
                {list.address}
              </div>
              <div className="address-right" >
                <div className="content">
                 
                </div>
                {/* <span style={{fontSize: "0.3rem",paddingTop:'0.1rem'}}>{list.call_center}</span> */}
              </div>
            </div>

            <div className="pics-wrapper" >
              <ul className="pics-list">
                <li className="pics-item">
                  <img src={list.pic_url_1} />
                </li>
                <li className="pics-item">
                  <img src={list.pic_url_2} />
                </li>
                <li className="pics-item">
                  <img src={list.pic_url_3} />
                </li>
                <li className="pics-item">
                  <img src={list.pic_url_4} />
                </li>
              </ul>
            </div>

            <div className="safety-wrapper">
              查看食品安全档案
              <span className="fa fa-arrow-right"></span>
            </div>
          </div>


          <div className="tip-wrapper">
            <div className="delivery-wrapper">
              配送服务:{list.app_delivery_tip}
            </div>

            <div className="shipping-wrapper">
              配送时间:{list.shipping_time}
            </div>
          </div>


          <div className="other-wrapper">
            <div className="server-wrapper">
              商家服务:
              <div className="poi-server" >
                <img src={list.icon}/>
                {list.content}
              </div>
            </div>
            <div className="discounts-wrapper">
              <div
                className="discounts-item">
                <div className="icon">
                  <img src={list.icon_url} />
                </div>
                <div className="text">
                {list.info}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </Wrapper >
  )
}
const mapStateToProps = (state) => {
  return {
    business:state.business.BusinessList,
    loading: state.business.Loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBusinessListDispatch() {
      dispatch(getBusinessList())
    },
   

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeBusiness)