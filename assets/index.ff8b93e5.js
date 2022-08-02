import{k,l as y,G as z,m as F,n as E,s as x,r as v,j as e,f as t,d as D,L as _,c as A,o as C,q as B}from"./index.96b17397.js";const G=i=>({type:y,data:i}),L=i=>({type:z,data:i}),j=i=>({type:F,data:i}),S=i=>({type:E,data:i}),O=()=>i=>{k().then(c=>{const s=G(c.data.data.food_spu_tags);i(s),i(L(!1))})},H=x.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
`,T=x.div`


.siderbar-bg {
  background-color: #fff;
}
.goods {
    display: flex;
    position: absolute;
    top: 12.73rem;
    bottom: 0px;
    overflow: hidden;
    width: 100%;
    /* overflow:auto; */
  }

  .goods .menu-wrapper {
    flex: 0 0 3.86rem;
    background: #f4f4f4;
    overflow-y: auto;
  }

  .goods .foods-wrapper {
    flex: 1;
    overflow-y: overlay;

  }

  .goods .menu-wrapper .menu-item {
    list-style-type: none;
    padding: 0.72rem 1.05rem 0.68rem 0.45rem;
    border-bottom: 1px solid #E4E4E4;
    position: relative;
  }

  .goods .foods-wrapper {
    flex: 1;

  }

  .goods .menu-wrapper .menu-item .text {
    font-size: 0.6rem;
    color: #333333;
    line-height: 0.77rem;
    vertical-align: middle;
    overflow: hidden;
  }

  .goods .menu-wrapper .menu-item .text .icon {
    width: 0.68rem;
    height: 0.68rem;
    vertical-align: middle;
  }

  /* 专场样式 */
  .goods .foods-wrapper .container-list {
    padding: 0.5rem 0.5rem 0 0.5rem;
    border-bottom: 1px solid #E4E4E4;
  }

  .goods .foods-wrapper .container-list img {
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 0.23rem;
  }

  /* 具体分类商品布局 */
  .goods .foods-wrapper .food-list {
    padding: 0.5rem;
  }
.food-container {
    margin-bottom:2rem;
}
  .goods .foods-wrapper .food-list .title {
    height: 0.6rem;
    font-size: 0.6rem;
    background: url('../src/assets/images/btn_yellow_highlighted@2x.png') no-repeat left center;
    background-size: 2px 0.45rem;
    padding-left: 0.58rem;
    margin-bottom: 0.545rem;
  }

  .goods .foods-wrapper .food-list .food-item {
    display: flex;
    margin-bottom: 1.2rem;
    position: relative;
  }

  .goods .foods-wrapper .food-list .food-item .icon {
    flex: 0 0 2.86rem;
    background-position: center;
    background-size: 120% 100%;
    background-repeat: no-repeat;
    margin-right: 0.5rem;
    height: 3.6rem;
  }
  .goods .foods-wrapper .food-list .food-item .icon img {
        width:3rem;
  }

  .goods .foods-wrapper .food-list .food-item .content {
    flex: 1;
  }

  /* 具体内容样式 */
  .goods .foods-wrapper .food-list .food-item .content .name {
    font-size: 0.72rem;
    line-height: 21px;
    color: #333333;
    margin-bottom: 0.45rem;
    padding-right: 1.22rem;
  }

  .goods .foods-wrapper .food-list .food-item .content .desc {
    font-size: 0.45rem;
    line-height: 0.86rem;
    color: #bfbfbf;
    margin-bottom: 8px;

    /* 超出部分显示省略号*/
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .goods .foods-wrapper .food-list .food-item .content .extra {
    font-size: 0.45rem;
    color: #BFBFBF;
    margin-bottom: 0.58rem;
  }

  .goods .foods-wrapper .food-list .food-item .content .extra .saled {
    margin-right: 0.63rem;
  }

  .goods .foods-wrapper .food-list .food-item .content .product {
    height: 0.68rem;
    margin-bottom: 0.27rem;
  }

  .goods .foods-wrapper .food-list .food-item .content .price {
    font-size: 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
  }

  .goods .foods-wrapper .food-list .food-item .content .price .text {
    font-size: 0.63rem;
    color: #fb4e44;
  }

  .goods .foods-wrapper .food-list .food-item .content .price .unit {
    font-size: 0.545rem;
    color: #BFBFBF;
  }

  /* 当前选中 */
  .goods .menu-wrapper .menu-item.current {
    background: white;
    font-weight: bold;
    margin-top: -1px;
  }

  .goods .menu-wrapper .menu-item:first-child.current {
    margin-top: 1px;
  }

  .goods .foods-wrapper .food-list .food-item .cartcontrol-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .goods .menu-wrapper .menu-item .num {
    position: absolute;
    right: 0.23rem;
    top: 0.23rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    color: white;
    background: red;
    text-align: center;
    font-size: 0.58rem;
    line-height: 0.6rem;
  }



  .price-right {
    font-size: 0.72rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    .price-right_reduce {
    background-image: url("https://p0.meituan.net/openhfiveimages/86a6957f27823b06a23c26be8aea5579725.png");
    background-repeat: no-repeat;
    background-position: center center;
}
.price-right_reduce, .price-right_add {
    width: 5.33333333vw;
    height: 5.33333333vw;
    background-size: 5.33333333vw 5.33333333vw;
    position: relative;
}
.reduce-box, .add-box {
    position: absolute;
    left: -3.33333333vw;
    right: -3.33333333vw;
    top: -3.33333333vw;
    bottom: -3.33333333vw;
}
.price-right_num {
    width: 8vw;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 3.73333333vw;
    color: #222426;
    letter-spacing: 0.05333333vw;
}
.price-right_add {
    background-image: url('https://p0.meituan.net/openhfiveimages/9daf1aae3cc53f1597c659262cc49545610.png');
    background-repeat: no-repeat;
    background-position: center center;
}
.price-right_reduce, .price-right_add {
    width: 5.33333333vw;
    height: 5.33333333vw;
    background-size: 5.33333333vw 5.33333333vw;
    position: relative;
}
.reduce-box {
    position: absolute;
    left: -3.33333333vw;
    right: -3.33333333vw;
    top: -3.33333333vw;
    bottom: -3.33333333vw;
}
}



.menu-item-icon.menu-item-iconv2 {
    width: 36px;
    border-radius: 0.545rem;
}
.menu-item-icon {
    position: absolute;
    top: 1px;
    right: 0px;
    color: #fff;
    background-color: #FB4E44;
    font-size: 0.45rem;
    width: 24px;
    height: 24px;
    font-size: 20px;
    line-height: 24px;
    -webkit-transform: scale(0.5) translate(50%, -50%);
    transform: scale(0.5) translate(50%, -50%);
    border-radius: 50%;
    text-align: center;
}
`,q=x.div`

.cart {
    background: #fff;
    position: fixed;
    z-index: 6;
    bottom: 0;
    left: 0;
    right: 0;
}
.cart-title-v2 {
    position: absolute;
    left: 3.2vw;
    right: 3.2vw;
    bottom: 9.2vw;
    height: 14.4vw;
}
.cart-title {
    box-sizing: border-box;
    background: #FFF8E1;
    border-radius: 3.2vw 3.2vw 0 0;
    text-align: center;
    /* height: 7.2vw; */
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 2.93333333vw;
    color: #222426;
    padding-top: 1.6vw;
}

.cart-content {
    z-index: 2;
    position: absolute;
    left: 3.2vw;
    right: 3.2vw;
    bottom: 3.46666667vw;
    background: #222426;
    border-radius: 6.66666667vw;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    color: #858687;
    height: 13.33333333vw;
}
.cart-content .cart-content-btn {
    width: 12.53333333vw;
    height: 18.4vw;
    background: #333;
    position: relative;
    top: -2.66666667vw;
    margin: 0 2.66666667vw;
    background: url('https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/8f4d255dfbe4e00e7010148eb76ca753.png');
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
}
.cart-content .cart-content-txt {
    /* color: #fff; */
    color:#858687;
    font-size: 2.93333333vw;
}
.cart-content .cart-content-txtv2 {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
.cart-content .cart-content-price {
    margin-left: 1.33333333vw;
    text-decoration: line-through;
}
.cart-content .cart-content-ft {
    font-size: 3.73333333vw;
    font-weight: 500;
    padding: 0 4.4vw;
    line-height: 13.33333333vw;
    color: #FFFFFF;
    margin-left: 2rem;
}
.cart::after {
    content: '';
    z-index: 1;
    background: #3b3b3c;
    position: absolute;
    top: 100%;
    width: 100%;
}


.modal {
    position: absolute;
    z-index: 1;
}
.modal-content .modal-box{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 350;
    overflow: hidden;
}
.cartDetail {
    position: absolute;
    /* top: 0; */
    bottom: 0;
    background: #fff;
    left: 0;
    right: 0;
    color: #333;
    z-index: 1;
    border-radius: 3.2vw 3.2vw 0 0;
}
.cartDetail-discount {
    box-sizing: border-box;
    background: #FFF8E1;
    border-radius: 3.2vw 3.2vw 0 0;
    text-align: center;
    height: 7.2vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 2.93333333vw;
    color: #222426;
    padding-top: 1.6vw;
}
.cartDetail-discount-desc {
    line-height: 4vw;
}
.cartDetail-discount-box {
    padding-left: 0.66666667vw;
    line-height: 4vw;
}
.cartDetail-title {
    height: 10.8vw;
    box-sizing: border-box;
    padding: 3.2vw 4.26666667vw;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.cartDetail-title .cartDetail-title-left {
    font-weight: 600;
    font-size: 3.2vw;
    line-height: 4.4vw;
    height: 4.4vw;
    color: #33312E;
}
.cartDetail-title .cartDetail-title-right {
    font-size: 3.2vw;
    line-height: 4.4vw;
    height: 4.4vw;
    color: #666666;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.cartDetail-title .cartDetail-title-right::before {
    content: '';
    display: inline-block;
    background: url('https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/88e2f9868badf9b9dc2b86905476188b.png');
    width: 3.2vw;
    height: 3.2vw;
    margin-right: 0.66666667vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: bottom;
}
.cartDetail-content {
    max-height: 93.33333333vw;
    overflow: scroll;
    border-top: 1px solid rgba(216, 216, 216, 0.3);
}
.cartDetail-content-v2 {
    position: relative;
    display: flex;
    padding: 4.26666667vw 0;
    margin: 0 15px;
    box-sizing: border-box;
}
.cartDetail-content-v2 .cartDetail-content-pic {
    width: 16vw;
    height: 16vw;
    border-radius: 1.6vw;
}
.cartDetail-content-v2 .cartDetail-content-v3 {
    margin-left: 2.66666667vw;
    padding-right: 2.66666667vw;
    -webkit-flex: auto;
    flex: auto;
}
.cartDetail-content-v2 .cartDetail-content-v3 .cartDetail-content-hd {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 0;
}
.cartDetail-content-v2 .cartDetail-content-desc {
    font-weight: 600;
    font-size: 3.73333333vw;
    line-height: 5.33333333vw;
    color: #33312E;
}
 .cartDetail-content-v2 .cartDetail-content-count {
    max-width: 51.46666667vw;
    font-weight: 500;
    font-size: 2.93333333vw;
    color: #666666;
    line-height: 4vw;
    margin-top: 0.53333333vw;
}
 .cartDetail-content-bd {
    height: 7.73333333vw;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    font-weight: 600;
    color: #FB4E44;
    .cartDetail-content-icon {
    font-size: 3.2vw;
    line-height: 4.4vw;
    margin-top: 2.8vw;
    width: 3.06666667vw;
}
 .cartDetail-content-price {
    font-size: 4.8vw;
    line-height: 6.66666667vw;
    margin-top: 1.06666667vw;
    color: #FB4E44;
    
}
}

.cartDetail-content-v2 .cartDetail-content-discount{
    text-decoration: line-through;
    font-weight: 600;
    font-size: 2.93333333vw;
    line-height: 3.6vw;
    margin-left: 1.33333333vw;
    margin-top: 3.2vw;
    color: #A9A9A9;
    letter-spacing: 0.04133333vw;
}
.cartDetail-content-ft {
    width: 18.66666667vw;
    margin-top: 13.73333333vw;
   
}
.cartDetail-content-ftv3 {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin-left: -20px;
    float: right;
}
.cartDetail-content-ftv2 {
    font-size: 16px;
    display: inline-flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    background-color: #FFFFFF;
}
.cartDetail-content-v2::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    left: 18.66666667vw;
    right: 0;
    background-color: rgba(232, 232, 232, 0.3);
}
.cartDetail .cartDetail-bundle {
    height: 35vw;
    margin: 0 4.26666667vw;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
}
.cartDetail .cartDetail-bundle .cartDetail-bundle-name {
    font-weight: 600;
    font-size: 3.73333333vw;
    line-height: 5.33333333vw;
    margin-top: 4.26666667vw;
    color: #33312E;
}
.cartDetail .cartDetail-bundle .cartDetail-bundle-symbol {
    font-weight: 600;
    font-size: 3.2vw;
    line-height: 4.4vw;
    width: 3.06666667vw;
    margin: 5.06666667vw 0vw 0 7.46666667vw;
    color: #FB4E44;
}
.cartDetail .cartDetail-bundle .cartDetail-bundle-count {
    font-weight: 600;
    font-size: 4.8vw;
    line-height: 6.66666667vw;
    margin-top: 3.33333333vw;
    color: #FB4E44;
}
/* .cartDetail-bundle::after {
    content: '';
    display: block;
    width:100%;
    height: 24.26666667vw;
} */

.cart-content-priceAll .priceAll-left {
    font-size: 5.86666667vw;
    color: #fff;
    margin-right: 1.33333333vw;
}
.cart-content-priceAll .priceAll-left-icon {
    font-size: 3.73333333vw;
    display: inline-block;
}
.cart-content-priceAll .priceAll-left-right {
    text-decoration: line-through;
    font-size: 2.93333333vw;
    color: #858687;
}
.cart-content-mid {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
}

.cart-bg {
    background: url('https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/34088a7505729ed54cdfcf1ee9c3d15d.png') !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
}
.cart-bg-ft {
    color: #333;
    font-weight: 500;
    font-size: 3.73333333vw;
    color: #222426;
    height: 13.33333333vw;
    line-height: 13.33333333vw;
    background: #f8c74e;
    background-image: linear-gradient(135deg, #FFDD33 0%, #FFBB33 100%);
    border-radius: 0 6vw 6vw 0;
    width: 22.4vw;
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
}


 .cart-content-btn .cart-content-icon {
    width: 8vw;
    height: 8vw;
    position: absolute;
    right: -1.33333333vw;
    top: 8.53333333vw;
    line-height: 8vw;
}
.cart-content-iconv2 {
    position: absolute;
    top: 1px;
    right: 0px;
    color: #fff;
    background-color: #FB4E44;
    font-size: 10px;
    width: 24px;
    height: 24px;
    font-size: 20px;
    line-height: 24px;
    transform: scale(0.5) translate(50%, -50%);
    border-radius: 50%;
    text-align: center;
}
`;function I(i){const{cartNumber:c,clearCart:s,singleCart:d}=i,[p,w]=v.exports.useState(!1);let r=[],f=[];d.forEach((n,g)=>{g%2==0&&r.push(n)});for(let n=0;n<r.length;n++)f.includes(r[n].id)?(r.splice(n,1),n--):f.push(r[n].id);let u=r.reduce((n,g)=>n+g.praise_num*g.min_price,0);const h=()=>{w(!p)},b=()=>{s(),h(),document.querySelector(".cart-content-btn").classList.remove("cart-bg"),document.querySelector(".cart-content-ft").classList.remove("cart-bg-ft")};return e(q,{children:t("div",{className:"cart",id:"cart",children:[r.length>0&&p&&t("div",{children:[e("div",{className:"modal",children:e("div",{className:"modal-content",children:e("div",{children:e("div",{className:"modal-box",onClick:()=>h()})})})}),e("div",{children:t("div",{className:"cartDetail",children:[t("div",{className:"cartDetail-discount",children:[e("span",{className:"cartDetail-discount-desc",children:"\u6298\u6263\u5DF2\u51CF20\u5143"}),e("span",{className:"cartDetail-discount-box"})]}),t("div",{children:[t("div",{className:"cartDetail-title",children:[e("span",{className:"cartDetail-title-left",children:"\u8D2D\u7269\u8F66"}),e("span",{className:"cartDetail-title-right",onClick:()=>b(),children:"\u6E05\u7A7A\u8D2D\u7269\u8F66"})]}),t("div",{children:[r.map((n,g)=>e("div",{className:"cartDetail-content",style:{overflow:"hidden"},children:e("div",{children:t("div",{className:"cartDetail-content-v2",children:[e("img",{className:"cartDetail-content-pic",src:n.picture}),t("div",{className:"cartDetail-content-v3",children:[t("div",{className:"cartDetail-content-hd",children:[e("div",{className:"cartDetail-content-desc",children:n.name}),e("div",{className:"cartDetail-content-count",children:"(1\u4EBA\u4EFD)\u30011\u4EBA\u4EFD"})]}),t("div",{className:"cartDetail-content-bd",children:[e("span",{className:"cartDetail-content-icon",children:"\xA5"}),e("span",{className:"cartDetail-content-price",children:n.min_price*n.praise_num}),t("span",{className:"cartDetail-content-discount",children:["\xA5",45*n.praise_num]})]})]}),e("div",{className:"cartDetail-content-ft",children:t("div",{className:"cartDetail-content-ftv2 cartDetail-content-ftv3",children:[e("span",{className:"cartDetail-content-ftbox",children:e("span",{className:"cartDetail-content-ftboxv2"})}),e("span",{className:"cartDetail-ft-count",children:n.praise_num}),e("span",{className:"cartDetail-ft-box",children:e("span",{className:"cartDetail-content-ftboxv2"})})]})})]})})},n.id)),t("div",{className:"cartDetail-bundle",children:[e("span",{className:"cartDetail-bundle-name",children:"\u6253\u5305\u8D39"}),e("span",{className:"cartDetail-bundle-symbol",children:"\xA5"}),e("span",{className:"cartDetail-bundle-count",children:r.length*2})]})]})]})]})})]}),e("div",{className:"cart-title cart-title-v2",children:e("div",{children:"\u6EE132\u51CF20;\u6EE150\u51CF28;\u6EE169\u51CF30;\u6EE189\u51CF39"})}),t("div",{className:"cart-content",children:[e("div",{role:"button",className:D({"cart-bg":r.length>0},"cart-content-btn"),onClick:()=>h(),children:r.length>0&&e("div",{className:"cart-content-icon cart-content-iconv2",children:c()})}),t("div",{className:"cart-content-mid",children:[r.length>0&&t("div",{className:"cart-content-priceAll",children:[t("span",{className:"priceAll-left",children:[e("span",{className:"priceAll-left-icon",children:"\xA5"}),u]}),e("span",{className:"priceAll-left-right",children:"\xA558.79"})]}),t("div",{className:"cart-content-txt cart-content-txtv2",children:["\u9884\u4F30\u53E6\u9700\u914D\u9001\u8D39 \xA51.1",e("span",{className:"cart-content-price",children:"\xA54.6"})]})]}),e(_,{to:"/order",children:e("div",{className:D({"cart-bg-ft":r.length>0},"cart-content-ft"),children:r.length?"\u53BB\u7ED3\u7B97":"\xA520\u8D77\u9001"})})]})]})})}var P=v.exports.memo(I);function V(i){const{goods:c,loading:s,price:d,singleCart:p}=i,{getGoodsListDispatch:w,changeGoodsNumDispatch:r,changeGoodsAllNumDispatch:f}=i;v.exports.useEffect(()=>{w()},[]);const u=(a,l,o)=>{a.preventDefault(),a.stopPropagation(),r({status:l,id:o})},h=a=>{if(a){let l=document.getElementById(a);l&&l.scrollIntoView({block:"start",behavior:"smooth"})}return!0},b=()=>{let a=0;return c.map(l=>{l.name!="\u70ED\u9500"&&l.spus.map(o=>{a+=o.praise_num})}),a},n=()=>{f()},g=()=>c.map((a,l)=>{let o=0;return a.spus.map(m=>{o+=m.praise_num}),e("li",{className:"menu-item",onClick:m=>{h(a.name)&&C()},children:t("div",{className:"text",children:[o>0&&e("div",{className:"menu-item-icon menu-item-iconv2",children:o}),e("img",{src:a.icon?a.icon:"",style:{width:"15px"}}),a.name]})},l)}),N=()=>c.map((a,l)=>t("li",{className:"food-list food-list-hook",id:a.name,children:[e("h3",{className:"title",children:a.name}),e("ul",{children:a.spus.map(o=>t("li",{className:"food-item",children:[e("div",{className:"icon",children:e("img",{src:o.picture,alt:""})}),t("div",{className:"content",children:[e("h3",{className:"name",children:o.name}),e("div",{className:"desc",children:o.description}),t("div",{className:"extra",children:[e("span",{className:"saled",children:o.month_saled_content}),e("span",{className:"praise",children:o.praise_content})]}),t("div",{className:"price",children:[t("div",{children:[t("span",{className:"text",children:["$",o.min_price]}),t("span",{className:"unit",children:["/",o.unit]})]}),t("div",{className:"price-right",children:[o.praise_num>0&&e("span",{className:"price-right_reduce",children:e("span",{className:"reduce-box",onClick:m=>u(m,"reduce",o.id)})}),e("span",{className:"price-right_num",children:o.praise_num?o.praise_num:""}),e("span",{className:"price-right_add",children:e("span",{className:"add-box",onClick:m=>u(m,"add",o.id)})})]})]})]})]},o.id))})]},l));return t(T,{children:[t("div",{className:"goods",children:[e("div",{className:"menu-wrapper",children:e("ul",{children:g()})}),e("div",{className:"foods-wrapper",children:e("ul",{className:"food-container",children:N()})})]}),e(P,{price:d,cartNumber:b,clearCart:n,singleCart:p}),s?e(H,{children:e(B,{})}):null]})}const $=i=>{let c=[];return i.goods.GoodsList.forEach(s=>{s.name!="\u70ED\u9500"&&s.spus.forEach(d=>{let p=0;p+=d.praise_num>0?d.min_price*d.praise_num:0,c.push(p)})}),{goods:i.goods.GoodsList,loading:i.goods.Loading,singleCart:i.goods.SingleCart,price:c.reduce((s,d)=>s+=d,0)}},M=i=>({getGoodsListDispatch(){i(O())},changeGoodsNumDispatch(c){i(j(c))},changeGoodsAllNumDispatch(c){i(S(c))}});var W=A($,M)(v.exports.memo(V));export{W as default};
