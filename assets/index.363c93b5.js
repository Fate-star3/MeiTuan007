import{D as p,E as t,s as n,c as d,r as c,j as e,f as s}from"./index.51f0f82d.js";const m=l=>({type:t,data:l}),o=()=>l=>{p().then(r=>{const i=m(r.data.data);l(i)})},w=n.div`
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
    background: url('/src/assets/images/seller/address.png') no-repeat left center;
    padding-left: 1.2rem;
    padding-right: 1.41rem;
    background-size: 0.636rem 0.727rem;
    font-size: 0.636rem;
    line-height: 0.86rem;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-right {
    flex: 0 0 60px;
    background: url('/src/assets/images/seller/line.png') no-repeat left center;
    background-size: 0.09rem 0.681rem;
  }

  .seller .seller-wrapper .seller-view .address-wrapper .address-right .content {
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/seller/phone.png') no-repeat center center;
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
    background: url('/src/assets/images/seller/safety.png') no-repeat left center;
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
    background: url('/src/assets/images/seller/delivery.png') no-repeat left center;
    background-size: 0.636rem 0.727rem;
    padding: 0.681rem 0 0.681rem 1.136rem;
    font-size: 0.636rem;
    border-bottom: 0.09rem solid #F4F4F4;
  }

  .seller .seller-wrapper .tip-wrapper .shipping-wrapper {
    background: url('/src/assets/images/seller/time.png') no-repeat left center;
    padding: 0.681rem 0.77rem 0.681rem 1.136rem;
    background-size: 0.681rem 0.681rem;
    font-size: 0.636rem;
    line-height: 0.81rem;
  }

  .seller .seller-wrapper .other-wrapper {
    padding-left: 0.681rem;
  }

  .seller .seller-wrapper .other-wrapper .server-wrapper {
    background: url('/src/assets/images/seller/server.png') no-repeat left center;
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

`;function g(l){const{business:r,loading:i}=l,{getBusinessListDispatch:a}=l;return c.exports.useEffect(()=>{a()},[]),e(w,{children:e("div",{className:"seller",children:s("div",{className:"seller-wrapper",children:[s("div",{className:"seller-view",children:[s("div",{className:"address-wrapper",children:[e("div",{className:"address-left",children:r.address}),e("div",{className:"address-right",children:e("div",{className:"content"})})]}),e("div",{className:"pics-wrapper",children:s("ul",{className:"pics-list",children:[e("li",{className:"pics-item",children:e("img",{src:r.pic_url_1})}),e("li",{className:"pics-item",children:e("img",{src:r.pic_url_2})}),e("li",{className:"pics-item",children:e("img",{src:r.pic_url_3})}),e("li",{className:"pics-item",children:e("img",{src:r.pic_url_4})})]})}),s("div",{className:"safety-wrapper",children:["\u67E5\u770B\u98DF\u54C1\u5B89\u5168\u6863\u6848",e("span",{className:"fa fa-arrow-right"})]})]}),s("div",{className:"tip-wrapper",children:[s("div",{className:"delivery-wrapper",children:["\u914D\u9001\u670D\u52A1:",r.app_delivery_tip]}),s("div",{className:"shipping-wrapper",children:["\u914D\u9001\u65F6\u95F4:",r.shipping_time]})]}),s("div",{className:"other-wrapper",children:[s("div",{className:"server-wrapper",children:["\u5546\u5BB6\u670D\u52A1:",s("div",{className:"poi-server",children:[e("img",{src:r.icon}),r.content]})]}),e("div",{className:"discounts-wrapper",children:s("div",{className:"discounts-item",children:[e("div",{className:"icon",children:e("img",{src:r.icon_url})}),e("div",{className:"text",children:r.info})]})})]})]})})})}const u=l=>({business:l.business.BusinessList,loading:l.business.Loading}),h=l=>({getBusinessListDispatch(){l(o())}});var f=d(u,h)(g);export{f as default};
