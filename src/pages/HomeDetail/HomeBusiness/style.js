import styled from 'styled-components'
// css in js 
export const Wrapper = styled.div`
    .seller {
    position: absolute;
    left: 0;
    top: 290px;
    bottom: 0px;
    width: 100%;
    background: #F4F4F4;
    overflow: hidden;
  }

  .seller .seller-wrapper {
    background: white;
  }

  .seller .seller-wrapper .seller-view {
    padding-left: 15px;
  }

  .seller .seller-wrapper .seller-view .address-wrapper {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid #F4F4F4;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-left {
    flex: 1;
    background: url('/src/assets/images/seller/address.png') no-repeat left center;
    padding-left: 26px;
    padding-right: 31px;
    background-size: 14px 16px;
    font-size: 14px;
    line-height: 19px;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-right {
    flex: 0 0 60px;
    background: url('/src/assets/images/seller/line.png') no-repeat left center;
    background-size: 1px 15px;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-right .content {
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/seller/phone.png') no-repeat center center;
    background-size: 18px 18px;
  }

  .seller .seller-wrapper .seller-view .pics-wrapper {
    padding: 10px 0;
    overflow: hidden;
    border-bottom: 1px solid #F4F4F4;
    white-space: nowrap;
  }

  /* .seller .seller-wrapper .seller-view .pics-wrapper .pics-list {
  } */

  .seller .seller-wrapper .seller-view .pics-wrapper .pics-list .pics-item {
    display: inline-block;
    margin-right: 11px;
    width: 93px;
    height: 75px;
  }

  .seller .seller-wrapper .seller-view .pics-wrapper .pics-list .pics-item img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }

  .seller .seller-wrapper .seller-view .safety-wrapper {
    padding: 15px 14px 15px 25px;
    background: url('/src/assets/images/seller/safety.png') no-repeat left center;
    background-size: 14px 16px;
    font-size: 14px;
  }

  .seller .seller-wrapper .seller-view .safety-wrapper span {
    float: right;
    font-size: 14px;
  }

  .seller .seller-wrapper .tip-wrapper {
    padding-left: 15px;
  }

  .seller .seller-wrapper .tip-wrapper .delivery-wrapper {
    background: url('/src/assets/images/seller/delivery.png') no-repeat left center;
    background-size: 14px 16px;
    padding: 15px 0 15px 25px;
    font-size: 14px;
    border-bottom: 1px solid #F4F4F4;
  }

  .seller .seller-wrapper .tip-wrapper .shipping-wrapper {
    background: url('/src/assets/images/seller/time.png') no-repeat left center;
    padding: 15px 17px 15px 25px;
    background-size: 15px 15px;
    font-size: 14px;
    line-height: 18px;
  }

  .seller .seller-wrapper .other-wrapper {
    padding-left: 15px;
  }

  .seller .seller-wrapper .other-wrapper .server-wrapper {
    background: url('/src/assets/images/seller/server.png') no-repeat left center;
    background-size: 15px 15px;
    padding: 15px 0 17px 25px;
    font-size: 14px;
    border-bottom: 1px solid #F4F4F4;
  }

  .seller .seller-wrapper .other-wrapper .server-wrapper .poi-server {
    display: inline-block;
    margin-left: 17px;
  }

  .seller .seller-wrapper .other-wrapper .server-wrapper .poi-server img {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    vertical-align: middle;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper {
    padding: 17px 24px 19px 0;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item {
    display: flex;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .icon {
    flex: 0 0 25px;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .icon img {
    width: 15px;
    height: 15px;
  }

  .seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .text {
    flex: 1;
    font-size: 14px;
  }

`