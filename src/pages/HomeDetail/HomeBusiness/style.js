import styled from 'styled-components'
// css in js 
export const Wrapper = styled.div`
    .seller {
    position: absolute;
    left: 0;
    top: 13.2rem;
    bottom: 0px;
    width: 100%;
    background: #F4F4F4;
    overflow: hidden;
  }

  .seller .seller-wrapper {
    background: white;
  }

  .seller .seller-wrapper .seller-view {
    padding-left: 0.681rem;
  }

  .seller .seller-wrapper .seller-view .address-wrapper {
    display: flex;
    padding: 0.727rem 0;
    border-bottom: 0.09rem solid #F4F4F4;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-left {
    flex: 1;
    background: url('./src/assets/images/seller/address.png') no-repeat left center;
    padding-left: 1.2rem;
    padding-right: 1.41rem;
    background-size: 0.636rem 0.727rem;
    font-size: 0.636rem;
    line-height: 0.86rem;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-right {
    flex: 0 0 60px;
    background: url('./src/assets/images/seller/line.png') no-repeat left center;
    background-size: 0.09rem 0.681rem;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-right .content {
    width: 100%;
    height: 100%;
    background: url('./src/assets/images/seller/phone.png') no-repeat center center;
    background-size: 0.81rem 0.81rem;
  }

  .seller .seller-wrapper .seller-view .pics-wrapper {
    padding: 0.454rem 0;
    overflow: hidden;
    border-bottom: 0.09rem solid #F4F4F4;
    white-space: nowrap;
  }

  /* .seller .seller-wrapper .seller-view .pics-wrapper .pics-list {
  } */

  .seller .seller-wrapper .seller-view .pics-wrapper .pics-list .pics-item {
    display: inline-block;
    margin-right: 0.5rem;
    width: 4.22rem;
    height: 3.4rem;
  }

  .seller .seller-wrapper .seller-view .pics-wrapper .pics-list .pics-item img {
    width: 100%;
    height: 100%;
    border-radius: 0.07rem;
  }

  .seller .seller-wrapper .seller-view .safety-wrapper {
    padding: 0.681rem 0.636rem 0.681rem 1.136rem;
    background: url('./src/assets/images/seller/safety.png') no-repeat left center;
    background-size: 0.636rem 0.727rem;
    font-size: 0.636rem;
  }

  .seller .seller-wrapper .seller-view .safety-wrapper span {
    float: right;
    font-size: 0.636rem;
  }

  .seller .seller-wrapper .tip-wrapper {
    padding-left: 0.681rem;
  }

  .seller .seller-wrapper .tip-wrapper .delivery-wrapper {
    background: url('./src/assets/images/seller/delivery.png') no-repeat left center;
    background-size: 0.636rem 0.727rem;
    padding: 0.681rem 0 0.681rem 1.136rem;
    font-size: 0.636rem;
    border-bottom: 0.09rem solid #F4F4F4;
  }

  .seller .seller-wrapper .tip-wrapper .shipping-wrapper {
    background: url('./src/assets/images/seller/time.png') no-repeat left center;
    padding: 0.681rem 0.77rem 0.681rem 1.136rem;
    background-size: 0.681rem 0.681rem;
    font-size: 0.636rem;
    line-height: 0.81rem;
  }

  .seller .seller-wrapper .other-wrapper {
    padding-left: 0.681rem;
  }

  .seller .seller-wrapper .other-wrapper .server-wrapper {
    background: url('./src/assets/images/seller/server.png') no-repeat left center;
    background-size: 0.681rem 0.681rem;
    padding: 0.681rem 0 0.77rem 1.136rem;
    font-size: 0.636rem;
    border-bottom: 0.09rem solid #F4F4F4;
  }

  .seller .seller-wrapper .other-wrapper .server-wrapper .poi-server {
    display: inline-block;
    margin-left: 0.77rem;
  }

  .seller .seller-wrapper .other-wrapper .server-wrapper .poi-server img {
    width: 0.681rem;
    height: 0.681rem;
    margin-right: 6px;
    vertical-align: middle;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper {
    padding: 0.77rem 24px 0.86rem 0;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item {
    display: flex;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .icon {
    flex: 0 0 1.136rem;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .icon img {
    width: 0.681rem;
    height: 0.681rem;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .text {
    flex: 1;
    font-size: 0.636rem;
  }

`