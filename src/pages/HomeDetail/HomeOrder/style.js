import styled from 'styled-components'

export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
`
export const Wrapper = styled.div`


.siderbar-bg {
  background-color: #fff;
}
.goods {
    display: flex;
    position: absolute;
    top: 280px;
    bottom: 0px;
    overflow: hidden;
    width: 100%;
    /* overflow:auto; */
  }

  .goods .menu-wrapper {
    flex: 0 0 85px;
    background: #f4f4f4;
    /* overflow-y: overlay; */
  }

  .goods .foods-wrapper {
    flex: 1;
    overflow-y: overlay;


  }

  .goods .menu-wrapper .menu-item {
    list-style-type: none;
    padding: 16px 23px 15px 10px;
    border-bottom: 1px solid #E4E4E4;
    position: relative;
  }

  .goods .foods-wrapper {
    flex: 1;

  }

  .goods .menu-wrapper .menu-item .text {
    font-size: 13px;
    color: #333333;
    line-height: 17px;
    vertical-align: middle;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .goods .menu-wrapper .menu-item .text .icon {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }

  /* 专场样式 */
  .goods .foods-wrapper .container-list {
    padding: 11px 11px 0 11px;
    border-bottom: 1px solid #E4E4E4;
  }

  .goods .foods-wrapper .container-list img {
    width: 100%;
    margin-bottom: 11px;
    border-radius: 5px;
  }

  /* 具体分类商品布局 */
  .goods .foods-wrapper .food-list {
    padding: 11px;
  }
.food-container {
    margin-bottom:2rem;
}
  .goods .foods-wrapper .food-list .title {
    height: 13px;
    font-size: 13px;
    background: url('/src/assets/images/btn_yellow_highlighted@2x.png') no-repeat left center;
    background-size: 2px 10px;
    padding-left: 7px;
    margin-bottom: 12px;
  }

  .goods .foods-wrapper .food-list .food-item {
    display: flex;
    margin-bottom: 25px;
    position: relative;
  }

  .goods .foods-wrapper .food-list .food-item .icon {
    flex: 0 0 63px;
    background-position: center;
    background-size: 120% 100%;
    background-repeat: no-repeat;
    margin-right: 11px;
    height: 75px;
  }
  .goods .foods-wrapper .food-list .food-item .icon img {
        width:3rem;
  }

  .goods .foods-wrapper .food-list .food-item .content {
    flex: 1;
  }

  /* 具体内容样式 */
  .goods .foods-wrapper .food-list .food-item .content .name {
    font-size: 16px;
    line-height: 21px;
    color: #333333;
    margin-bottom: 10px;
    padding-right: 27px;
  }

  .goods .foods-wrapper .food-list .food-item .content .desc {
    font-size: 10px;
    line-height: 19px;
    color: #bfbfbf;
    margin-bottom: 8px;

    /* 超出部分显示省略号*/
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .goods .foods-wrapper .food-list .food-item .content .extra {
    font-size: 10px;
    color: #BFBFBF;
    margin-bottom: 7px;
  }

  .goods .foods-wrapper .food-list .food-item .content .extra .saled {
    margin-right: 14px;
  }

  .goods .foods-wrapper .food-list .food-item .content .product {
    height: 15px;
    margin-bottom: 6px;
  }

  .goods .foods-wrapper .food-list .food-item .content .price {
    font-size: 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
  }

  .goods .foods-wrapper .food-list .food-item .content .price .text {
    font-size: 14px;
    color: #fb4e44;
  }

  .goods .foods-wrapper .food-list .food-item .content .price .unit {
    font-size: 12px;
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
    right: 5px;
    top: 5px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    color: white;
    background: red;
    text-align: center;
    font-size: 7px;
    line-height: 13px;
  }



  .price-right {
    font-size: 16px;
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
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
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
    border-radius: 12px;
}
.menu-item-icon {
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
    -webkit-transform: scale(0.5) translate(50%, -50%);
    transform: scale(0.5) translate(50%, -50%);
    border-radius: 50%;
    text-align: center;
}
`