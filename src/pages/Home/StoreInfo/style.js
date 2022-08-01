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
        padding-top:0.045rem;
        padding-bottom: 3rem; 
        /* overflow:auto; */

        .loadMore {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2.27rem;
            border: 0.045rem; 
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
    border: 0.045rem solid #F2F1F0;
    border-radius: 0.27rem;
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
        border: 0.045rem solid #F2F1F0;
        box-sizing: border-box;
        border-radius: 0.27rem;
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
            line-height: 0.81rem;
            padding: 0 0.1rem;
            border-radius: 0.1rem;
          
        }
        &-pic{
            display: block;
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 0.4rem;
        }
        &-poitypepic{
            position: absolute;
            top: -0.09rem;
            right: -0.09rem;
            height: 0.81rem;
            .poitype-pic{
                display: block;
                height: 100%;
                object-fit: cover;
            }
        }
        &-poitypetxt{
            position: absolute;
            top: 0.09rem;
            right: -0.09rem;
            height: 0.81rem;
            line-height: 0.81rem;
            padding: 0 0.09rem;
            border-radius: 0.09rem;
        
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
            line-height: 0.81rem;
            padding: 0 0.09rem;
            border-radius: 0.09rem;
           
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
            margin-top: -0.13rem;
            .info1badge-pic{
                display: block;
                height: 100%;
                object-fit: cover;
            }
        }
        &badgetxt{
            flex-shrink: 0;
            max-width: 2.25rem;
            overflow: hidden;
            font-size: 12px;
            line-height: 18px;
            padding: 0 0.09rem;
            border-radius: 0.09rem;
           
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
                    padding: 0 0.18rem;
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
                        margin-left: 0.18rem;
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
                border-radius: 0.18rem;
                font-size: .55rem;
                color: #FF8000;
                line-height: .8rem;
                padding: 0 0.18rem;
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
                    margin-right: 0.09rem;
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
            margin: 0 0.18rem 0.27rem 0;
            overflow: hidden;
            flex: none;
            max-width: 100%;
            border-radius: 0.18rem;
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
                border-radius: 0.09rem;
                .info4-item-txtlefticon{
                    height: .8rem;
                }
                .info4-item-txt{
                    max-width: 100%;
                    overflow: hidden;
                    flex: none;
                    padding: 0 0.09rem;
                    line-height: .8rem;
                    font-size: .55rem;
                   
                }
                .info4-item-txtrighticon{
                    height: .6rem;
                    border-radius: 0.18rem;
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
            padding-right: 0.68rem;
        }
        &tag{
            flex: none;
            // overflow: hidden;
            box-sizing: border-box;
            position: relative;
            max-height: .8rem;
            max-width: 10rem;
            min-width: 0.23rem;
            margin: 0.09rem 0.18rem 0.18rem 0;
            display: flex;
            align-items: center;
            font-size: 0;
            &.tag-has-border{
                @include util-border(0.045rem, #FFC6C1, solid, 0.18rem);
                @include util-border(0.045rem, currentColor, solid, 0.18rem);
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
                // margin: 0 0.18rem;
                padding: 0 0.18rem;
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
                padding: 0 0.18rem;
            }
        }
        &arrow{
            position: absolute;
            right: 0.13rem;
            top: 0.23rem;
            height: 0.46rem;
            transition: all .2s;
            &.arrow-show{
                transform: rotate(180deg);
            }
        }
    }
}
 // 如果设计稿宽度为750, 可以用* @px代替px, 以自适应屏幕宽度

 .poilist-item-info5.more-icon-need {
    padding-right: 0.68rem;
}
.d_cmm-label-comp-wrap {
    letter-spacing: 0;
    -webkit-text-size-adjust: none;
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
    height: 0.85rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;
}
.d_cmm-label-comp-wrap .d_sublabel-container {
    height: 0.73rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel-block {
    display: flex;
    flex-wrap: wrap;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel {
    flex: none;
    max-width: 100%;
    font-size: 0.5rem;
    color: #fb4e44;
    border: 0.13333333vw solid transparent;
    border-radius: 0.11rem;
    margin-right: 0.3rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.175rem;
    height: 0.8rem;
    overflow: hidden;
}

.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    font-size: 0.46rem;
    color: #fb4e44;
    border: 0.045rem solid transparent;
    border-radius: 0.09rem;
    margin-right: 0.27rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 3.0.23rem;
    .d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb-wrap {
    height: 0.8rem;
    flex: auto;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb-wrap {
    height: 0.73rem;
}
    height: 0.73rem;
    overflow: hidden;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb:first-child {
    margin-left: 0;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb {
    display: inline-block;
    color: #fb4e44;
    padding: 0 0.175rem;
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    vertical-align: middle;
}
.d_cmm-label-comp-wrap .d_sublabel-container .d_sublabel .d_lb {
    display: inline-block;
    color: #fb4e44;
    padding: 0 3.0.23rem;
    margin-bottom: 3.0.23rem;
    height: 0.73rem;
    line-height: 0.73rem;
    position: relative;
}
`