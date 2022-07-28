import styled from 'styled-components'

export const Wrapper = styled.div`
        height:3.5rem;
        color: #333;
        .kk-filter-wrapper {
            padding-top: 10px;

            .com-filter .filter-wrapper {
                padding: 0 0.12rem;
            }
                .m-filter-out {
                     height: 28px;
                     overflow: hidden;
                     padding: 0 7px 0 8px;
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
                        -webkit-align-items: center;
                        align-items: center;
                    }
                    .m-filter-out .out-item-center {
                         -webkit-flex: none;
                         flex: none;
                         width: 50%;
                         overflow: hidden;
                         display: flex;
                         -webkit-flex-direction: row-reverse;
                         flex-direction: row-reverse;
                         -webkit-align-items: center;
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
                            -webkit-flex-direction: row-reverse;
                            flex-direction: row-reverse;
                        }
                        .m-filter-out .out-item-info {
                            overflow: hidden;
                            display: flex;
                            -webkit-align-items: center;
                            align-items: center;
                        }
                        .m-filter-out .out-item-info-titarrow {
                         margin-left: 4px;
                         -webkit-flex: none;
                         flex: none;
                         height: 6px;
                         width: 7px;
                         transition: all .2s;
                        }
                        .m-filter-out .out-item-info-tit {
                            -webkit-flex-shrink: 1;
                            flex-shrink: 1;
                            font-size: 12px;
                            color: #222426;
                            text-align: center;
                            line-height: 28px;
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
                        padding: 4px 0 6px 0;
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
                     height: 31px;
                    }
                    .m-filter-quick .quick-item-hidebar {
                        width: 82px;
                        height: 27px;
                        border-radius: 6px;
                        overflow: hidden;
                        display: flex;
                        -webkit-align-items: center;
                        align-items: center;
                        background-color: #fff;
                        position: relative;
}
.m-filter-quick .quick-item-tit {
    overflow: hidden;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex: 1;
    flex: 1;
    -webkit-justify-content: center;
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 0 4px;
    box-sizing: border-box;
}
.m-filter-quick .quick-item-tittxt {
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    font-size: 12px;
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
            width:50px;
            height: 50px;
            position: fixed;
            bottom: 60px;
            right: 10px;
            border-radius: 50%;
            line-height: 50px;
            text-align: center;
            font-size: 26px;
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
                width: 82px;
                height: 27px;
                border-radius: 6px;
            }
        }
`