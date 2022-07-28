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
        width:100%;
        padding-top:1px;
        padding-bottom: 60px; 
        /* overflow:auto; */

        .loadMore {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px; 
  border-style: solid;
  border-color: red;
}
.poilist-item{
    background-color: #FFFFFF;
    border-radius: .1rem;
    padding: .5rem;
    margin-bottom: .1rem;
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid #F2F1F0;
    border-radius: 6px;
    overflow: visible;
    margin:0.5rem;
    &.poilist-item-gray{
        opacity: 0.5;
        // color: #999;
    }
    &-icon{
        position: relative;
        flex-shrink: 0;
        margin-right: .08rem;
        width: 5.05rem;
        height: 5.05rem;
        border: 1px solid #F2F1F0;
        box-sizing: border-box;
        border-radius: 6px;
        &-promotionpic{
            position: absolute;
            top: -0.05rem;
            left: -0.04rem;
            width: 0.41rem;
            height: 0.42rem;
            .promotion-pic{
                display: block;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        &-promotiontxt{
            position: absolute;
            top: -0.05rem;
            left: -0.04rem;
            width: 0.41rem;
            max-width: .5rem;
            font-size: 12px;
            line-height: 18px;
            padding: 0 2px;
            border-radius: 2px;
          
        }
        &-pic{
            display: block;
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 6px;
        }
        &-poitypepic{
            position: absolute;
            top: -2px;
            right: -2px;
            height: 18px;
            .poitype-pic{
                display: block;
                height: 100%;
                object-fit: cover;
            }
        }
        &-poitypetxt{
            position: absolute;
            top: 2px;
            right: -2px;
            height: 18px;
            line-height: 18px;
            padding: 0 2px;
            border-radius: 2px;
        
        }
    }
    &-info{
        overflow: hidden;
        flex: 1;
    }
    &-info1{
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 1.15rem;
        padding-bottom: 0.15rem;
        &couponpic{
            flex-shrink: 0;
            height: .8rem;
            margin-right: .2rem;
            .info1coupon-pic{
                display: block;
                height: 100%;
                object-fit: cover;
            }
        }
        &coupontxt{
            margin-right: .2rem;
            flex-shrink: 0;
            max-width: 2.25rem;
            overflow: hidden;
            font-size: 12px;
            line-height: 18px;
            padding: 0 2px;
            border-radius: 2px;
           
        }
        &name{
            flex: 1;
            font-weight: 600;
            font-size: .75rem;
            color: #222426;
            margin-right: 8px;
            line-height: 1rem;
           
        }
        &badgepic{
            flex-shrink: 0;
            height: 20px;
            margin-top: -3px;
            .info1badge-pic{
                display: block;
                height: 100%;
                object-fit: cover;
            }
        }
        &badgetxt{
            flex-shrink: 0;
            max-width: 2025rem;
            overflow: hidden;
            font-size: 12px;
            line-height: 18px;
            padding: 0 2px;
            border-radius: 2px;
           
        }
    }
    &-info2{
        padding: 0.1rem 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1rem;
        box-sizing: border-box;
        &left{
            flex: 1;
            margin-right: 0.3rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            &.poilist-item-only-order{
                .poi-info-txt{
                    padding: 0 4px;
                    color: rgb(255, 128, 0);
                    background-color: rgb(255, 248, 225);
                }
            }
            .poi-info-txt{
                font-size: .55rem;
                color: #858687;
                line-height: .8rem;
                margin-right: .3rem;
                white-space: nowrap;
                &.score{
                    color: #ff8000;
                    font-size: .6rem;
                    font-weight: 500;
                    img {
                        height: .45rem;
                        width: .45rem;
                        margin-left: 4px;
                    }
                }
            }
        }
        &right{
            flex-shrink: 0;
            overflow: hidden;
            height: .8rem;
            .poi-info-deliverytag{
                background: #FAFAFA;
                border-radius: 4px;
                font-size: .55rem;
                color: #FF8000;
                line-height: .8rem;
                padding: 0 4px;
            }
        }
    }
    &-info3{
        padding: 0.05rem 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.2rem;
        box-sizing: border-box;
        &left{
            flex: 1;
            margin-right: 0.3rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            .poi-info-txt{
                font-size: .55rem;
                color: #858687;
                line-height: .8rem;
                margin-right: .3rem;
                white-space: nowrap;
                &.no-margin-right{
                    margin-right: 2px;
                }
                &.through-line{
                    text-decoration: line-through;
                   
                }
            }
        }
        &right{
            flex-shrink: 0;
            overflow: hidden;
            height: .8rem;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            .poi-info-txt{
                font-size: .55rem;
                color: #858687;
                line-height: .8rem;
                margin-left: .3rem;
                white-space: nowrap;
            }
        }
    }
    &-info4{
        padding: 0.1rem 0;
        height: 1.15rem;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        box-sizing: border-box;
        &item{
            height: 0.8rem;
            margin: 0 4px 6px 0;
            overflow: hidden;
            flex: none;
            max-width: 100%;
            border-radius: 4px;
            &pic{
                max-width: 100%;
                height: 0.8rem;
                .info4-item-pic{
                    display: block;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &txt{
                max-width: 100%;
                height: 0.8rem;
                display: flex;
                align-items: center;
                border-radius: 2px;
                .info4-item-txtlefticon{
                    height: .8rem;
                }
                .info4-item-txt{
                    max-width: 100%;
                    overflow: hidden;
                    flex: none;
                    padding: 0 2px;
                    line-height: .8rem;
                    font-size: .55rem;
                   
                }
                .info4-item-txtrighticon{
                    height: .6rem;
                    border-radius: 4px;
                }
            }
        }
    }
    &-info5{
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        position: relative;
        height: .95rem;
        overflow: hidden;
        &.more-info5tag{
            height: auto;
            overflow: auto;
        }
        &.more-icon-need{
            padding-right: 15px;
        }
        &tag{
            flex: none;
            // overflow: hidden;
            box-sizing: border-box;
            position: relative;
            max-height: .8rem;
            max-width: 10rem;
            min-width: 5px;
            margin: 2px 4px 4px 0;
            display: flex;
            align-items: center;
            font-size: 0;
            &.tag-has-border{
                @include util-border(1px, #FFC6C1, solid, 4px);
                @include util-border(1px, currentColor, solid, 4px);
            }
            .info5-subtagtxt{
                flex: 1;
                height: .8rem;
                font-size: .55rem;
                line-height: .8rem;
                @extend .util-text-overflow-ellipsis-oneline;
            }
            .subtag-txt-span{
                font-size: .55rem;
                line-height: .8rem;
                vertical-align: middle;
                // margin: 0 4px;
                padding: 0 4px;
            }
            .subtag-txt-img{
                display: block;
                height: 100%;
                object-fit: cover;
            }
            .subtag-txt-split{
                // opacity: 0.3;
                // background: #FF3333;
                display: inline-block;
                height: .4rem;
                vertical-align: middle;
            }
            .info5-lastsubtag{
                flex: none;
                font-size: .55rem;
                line-height: .8rem;
                padding: 0 4px;
            }
        }
        &arrow{
            position: absolute;
            right: 3px;
            top: 5px;
            height: 10px;
            transition: all .2s;
            &.arrow-show{
                transform: rotate(180deg);
            }
        }
    }
}
 // 如果设计稿宽度为750, 可以用* @px代替px, 以自适应屏幕宽度

 .poilist-item-info5.more-icon-need {
    padding-right: 15px;
}
.d_cmm-label-comp-wrap {
    letter-spacing: 0;
    -webkit-text-size-adjust: none;
    display: -webkit-flex;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
}
.d_cmm-label-comp-wrap .d_sublabel-container.d_multi-line {
    height: auto;
}
.d_cmm-label-comp-wrap .d_sublabel-container.d_multi-line {
    height: auto;
}

.d_cmm-label-comp-wrap .d_sublabel-container {
    height: 4.53333333vw;
    display: flex;
    overflow: hidden;
    flex-direction: column;
}
.d_cmm-label-comp-wrap .d_sublabel-container {
    height: 16px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-direction: column;
    flex-direction: column;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel-block {
    display: flex;
    flex-wrap: wrap;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel {
    flex: none;
    max-width: 100%;
    font-size: 2.66666667vw;
    color: #fb4e44;
    border: 0.13333333vw solid transparent;
    border-radius: 0.53333333vw;
    margin-right: 1.6vw;
    display: flex;
    align-items: center;
    margin-bottom: 0.93333333vw;
    height: 4.26666667vw;
    overflow: hidden;
}

.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    font-size: 10px;
    color: #fb4e44;
    border: 1px solid transparent;
    border-radius: 2px;
    margin-right: 6px;
    box-sizing: border-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    margin-bottom: 3.5px;
    .d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb-wrap {
    height: 4.26666667vw;
    flex: auto;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb-wrap {
    height: 16px;
}
    height: 16px;
    overflow: hidden;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb:first-child {
    margin-left: 0;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb {
    display: inline-block;
    color: #fb4e44;
    padding: 0 0.93333333vw;
    height: 4.26666667vw;
    line-height: 4.26666667vw;
    position: relative;
    vertical-align: middle;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb {
    display: inline-block;
    color: #fb4e44;
    padding: 0 3.5px;
    margin-bottom: 3.5px;
    height: 16px;
    line-height: 16px;
    position: relative;
}
/* .d_cmm-label-comp-wrap {
    .d_sublabel-container {
        height: 34 * (100vw / 750);
        display: flex;
        overflow: hidden;
        flex-direction: column;
        &.d_multi-line {
            height: auto;
        }
        .d_sublabel-block {
            display: flex;
            flex-wrap: wrap;
        }
        .d_sublabel {
            flex: none;
            max-width: 100%;
            font-size: 20 * (100vw / 750);
            color: #fb4e44;
            border: 1 * (100vw / 750) solid transparent;
            border-radius: 4 * (100vw / 750);
            margin-right: 12 * (100vw / 750);
            display: flex;
            align-items: center;
            margin-bottom: 7 * (100vw / 750);
            height: 32 * (100vw / 750);
            overflow: hidden;

            .d_lb-wrap {
                height: 32 * (100vw / 750);
                flex: auto;
            }

            .d_lb {
                display: inline-block;
                color: #fb4e44;
                padding: 0 7 * (100vw / 750);
                height: 32 * (100vw / 750);
                line-height: 32 * (100vw / 750);
                position: relative;
                vertical-align: middle;
            }

            .d_line {
                position: absolute;
                left: 0;
                top: 8 * (100vw / 750);
                background: #FDC9C6;
                width: 1 * (100vw / 750);
                height: 16 * (100vw / 750);
            }

            .d_img-bg {
                height: 32 * (100vw / 750);
                display: inline-flex;
                align-items: center;
                background-color: #fff;
                padding: 0 0 0 5 * (100vw / 750);
                vertical-align: middle;

                > img {
                    height: 28 * (100vw / 750);
                }
            }

            .d_mix-lb {
                padding: 0 8 * (100vw / 750);
                height: 32 * (100vw / 750);
                display: flex;
                align-items: center;
                justify-content: center;
                border-left: 1 * (100vw / 750) solid #FDC9C6;
                background: #FFEFF4;
                flex: none;
            }
        }
        .d_whole-block-label {
            flex: 1 1 auto;
            font-size: 20 * (100vw / 750);
            color: #fb4e44;
            display: flex;
            align-items: center;
            margin-bottom: 7 * (100vw / 750);

            .d_wholeblock-lb-wrap {
                display: flex;
                flex: auto;
            }

            .d_whole-line-lb {
                display: inline-block;
                color: #fb4e44;
                padding: 0 7 * (100vw / 750);
                margin-bottom: 7 * (100vw / 750);
                line-height: 32 * (100vw / 750);
                position: relative;
            }

            .d_line {
                position: absolute;
                left: 0;
                top: 8 * (100vw / 750);
                background: #FDC9C6;
                width: 1 * (100vw / 750);
                height: 16 * (100vw / 750);
            }

            .d_img-bg {
                height: 32 * (100vw / 750);
                display: inline-flex;
                align-items: center;
                background-color: #fff;
                padding: 0 0 0 5 * (100vw / 750);
                vertical-align: middle;
            }

            .d_mix-lb {
                padding: 0 8 * (100vw / 750);
                height: 32 * (100vw / 750);
                display: flex;
                align-items: center;
                justify-content: center;
                border-left: 1 * (100vw / 750) solid #FDC9C6;
                background: #FFEFF4;
                flex: none;
            }
        }
    }
} */
`