import styled from 'styled-components'

export const Wrapper = styled.div`
        height:3.5rem;
        color: #333;
        .kk-filter-wrapper {
            padding-top: 0.45rem;

            .com-filter .filter-wrapper {
                padding: 0 0.12rem;
            }
                .m-filter-out {
                     height: 1.27rem;
                     overflow: hidden;
                     padding: 0 0.31rem 0 0.36rem;
                }
                .m-filter-out .out-wrapper {
                     display: flex;
                     -webkit-justify-content: space-between;
                     justify-content: space-between;
                     -webkit-align-items: center;
                     align-items: center;
                     overflow: hidden;
                    }    
                    .m-filter-out .out-item-left {
                     -webkit-flex: none;
                     flex: none;
                     width: 25%;
                     overflow: hidden;
                     margin-left: 0.5rem;
                    }     
                    
                    .m-filter-out .out-item-info {
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                    }
                    .m-filter-out .out-item-center {
                         flex: none;
                         width: 50%;
                         overflow: hidden;
                         display: flex;
                         flex-direction: row-reverse;
                         align-items: center;
                    }
                    .m-filter-out .out-item-right {
                        -webkit-flex: none;
                        flex: none;
                        overflow: hidden;
                        width: 25%;
                        margin-left: -1rem;
                        }
                        .m-filter-out .out-item-right .out-item-info {
                            flex-direction: row-reverse;
                        }
                        .m-filter-out .out-item-info {
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                        }
                        .m-filter-out .out-item-info-titarrow {
                         margin-left: 0.18rem;
                         flex: none;
                         height: 0.27rem;
                         width: 0.31rem;
                         transition: all .2s;
                        }
                        .m-filter-out .out-item-info-tit {
                            -webkit-flex-shrink: 1;
                            flex-shrink: 1;
                            font-size: 0.54rem;
                            color: #222426;
                            text-align: center;
                            line-height: 1.27rem;
                            font-weight: 600;
                        
                        }
                .util-text-overflow-ellipsis-oneline, .m-filter-out .out-item-info-tit {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                    }
                    .m-filter-quick {
                        height: 37px;
                        overflow: hidden;
                        padding: 0.18rem 0 0.27rem 0;
                        box-sizing: border-box;
                        position: relative;
                    }
                    .m-filter-quick .quick-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        overflow-y: hidden;
                        /* overflow-x: scroll; */
                    }
                    .m-filter-quick .quick-item {
                     height: 1.4rem;
                    }
                    .m-filter-quick .quick-item-hidebar {
                        width: 3.27rem;
                        height: 1.1rem;
                        border-radius: 0.27rem;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        background-color: #fff;
                        position: relative;
}
.m-filter-quick .quick-item-tit {
    overflow: hidden;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    padding: 0 0.18rem;
    box-sizing: border-box;
}
.m-filter-quick .quick-item-tittxt {
    flex-shrink: 1;
    font-size: 0.54rem;
    color: #575859;
    line-height: 27px;
    text-align: center;
}
.util-text-overflow-ellipsis-oneline, .m-filter-quick .quick-item-tittxt {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

}  


        .back_top{
            width:2.27rem;
            height: 2.27rem;
            position: fixed;
            bottom: 2.72rem;
            right: 0.45rem;
            border-radius: 50%;
            line-height: 2.27rem;
            text-align: center;
            font-size: 1.2rem;
            z-index:999;
            background-color: #eee;
        }

        .fixed {
            position:fixed;
            width: 100%;
            /* height: 30px; */
            top:4rem;
            left: 0;
            z-index:999;
            background-color: #fff;
            .quick-item-tittxt {
                background-color: #f5f5f6;
                width: 3.27rem;
                height: 1.33rem;
                border-radius: 0.27rem;
            }
        }
`