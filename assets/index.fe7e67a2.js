import{D as a,E as t,s as n,c as d,r as c,j as e,f as s}from"./index.6c558714.js";const o=p=>({type:t,data:p}),w=()=>p=>{a().then(r=>{const l=o(r.data.data);p(l)})},g=n.div`
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

`;function u(p){const{business:r,loading:l}=p,{getBusinessListDispatch:i}=p;return c.exports.useEffect(()=>{i()},[]),e(g,{children:e("div",{className:"seller",children:s("div",{className:"seller-wrapper",children:[s("div",{className:"seller-view",children:[s("div",{className:"address-wrapper",children:[e("div",{className:"address-left",children:r.address}),e("div",{className:"address-right",children:e("div",{className:"content"})})]}),e("div",{className:"pics-wrapper",children:s("ul",{className:"pics-list",children:[e("li",{className:"pics-item",children:e("img",{src:r.pic_url_1})}),e("li",{className:"pics-item",children:e("img",{src:r.pic_url_2})}),e("li",{className:"pics-item",children:e("img",{src:r.pic_url_3})}),e("li",{className:"pics-item",children:e("img",{src:r.pic_url_4})})]})}),s("div",{className:"safety-wrapper",children:["\u67E5\u770B\u98DF\u54C1\u5B89\u5168\u6863\u6848",e("span",{className:"fa fa-arrow-right"})]})]}),s("div",{className:"tip-wrapper",children:[s("div",{className:"delivery-wrapper",children:["\u914D\u9001\u670D\u52A1:",r.app_delivery_tip]}),s("div",{className:"shipping-wrapper",children:["\u914D\u9001\u65F6\u95F4:",r.shipping_time]})]}),s("div",{className:"other-wrapper",children:[s("div",{className:"server-wrapper",children:["\u5546\u5BB6\u670D\u52A1:",s("div",{className:"poi-server",children:[e("img",{src:r.icon}),r.content]})]}),e("div",{className:"discounts-wrapper",children:s("div",{className:"discounts-item",children:[e("div",{className:"icon",children:e("img",{src:r.icon_url})}),e("div",{className:"text",children:r.info})]})})]})]})})})}const x=p=>({business:p.business.BusinessList,loading:p.business.Loading}),h=p=>({getBusinessListDispatch(){p(w())}});var v=d(x,h)(u);export{v as default};
