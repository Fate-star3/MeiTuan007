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
    top: 12.73rem;
    bottom: 0px;
    overflow: hidden;
    width: 100%;
  }

  .goods .menu-wrapper {
    flex: 0 0 3.86rem;
    background: #f4f4f4;
    overflow: auto;
    margin-top: 1rem;
    &::-webkit-scrollbar {
            display: none;
        }
  }

  .goods .foods-wrapper {
    flex: 1;
    overflow: auto;
    &::-webkit-scrollbar {
            display: none;
        }

  }
  .goods .menu-wrapper .menu-item {
    list-style-type: none;
    padding: 0.72rem 1.05rem 0.68rem 0.45rem;
    border-bottom: 1px solid #E4E4E4;
    position: relative;
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
    margin:1rem 0 2rem 0;
}
  .goods .foods-wrapper .food-list .title {
    height: 0.6rem;
    font-size: 0.6rem;
    background: url('../../../assets/images/btn_yellow_highlighted@2x.png') no-repeat left center;
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
`