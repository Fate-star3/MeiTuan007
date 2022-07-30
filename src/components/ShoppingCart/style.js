import styled from "styled-components";

export const Wrapper = styled.div`

.cart {
    background: #fff;
    position: fixed;
    z-index: 6;
    bottom: 0;
    left: 0;
    right: 0;
    bottom: constant(safe-area-inset-bottom);
    bottom: env(safe-area-inset-bottom);
    left: constant(safe-area-inset-left);
    right: env(safe-area-inset-right);
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
    display: -webkit-flex;
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
`