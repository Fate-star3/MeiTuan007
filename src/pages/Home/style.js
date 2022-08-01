import styled from 'styled-components'

export const Wrapper = styled.div`
  
      overflow:auto;
        .container {
            /* position:relative; */
            background-color: #ffcc33;
            height: 4.4rem;
            transition:all 0.3s ease-in-out;
            .wraper {
                width: 94%;
                margin: 0 auto;
                .searchv2 {
                    /* position:relative; */
                    background-color:#fff !important;
                    padding: 0.4rem;
                    border-radius:50px;
                }
            }
           .search {
                flex: none;
                margin: 1.6vw 0px 2.13333333vw 0px;
                position: relative;
                background: #fff;
                border-radius: 100px;
                height: 9.06666667vw;
                input {
                     width: 100%;
                     position: relative;
                     border: none;
                     height: 100%;
                     padding-left: 30px;
                     box-sizing: border-box;
                     border-radius: 100px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     padding-right: 30px;
                     font-size: 3.2vw;
                     color: #858687;
                     opacity: 1;
                     display: flex;
                     -webkit-align-items: center;
                     align-items: center;
                     outline:none;
                    }
                    .search-right {
                        font-weight: 500;
                        font-size: 3.73333333vw;
                        color: #222426;
                        line-height: 5.06666667vw;
                        padding: 1.2vw 3.46666667vw;
                        position: absolute;
                        right: 0.93333333vw;
                        top: 0.8vw;
                        background: #FECE4D;
                        border-radius: 13.33333333vw;
                    }
                    &::after {
                         content: '';
                         background: url('https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/4601f5ad6630220c49ad11362304e2d1.png');
                         background-repeat: no-repeat;
                         background-size: contain;
                         width: 3.2vw;
                         height: 3.2vw;
                         margin: 0 5px 0 11px;
                         position: absolute;
                         left: 0;
                         top: 50%;
                         -webkit-transform: translateY(-50%);
                         transform: translateY(-50%);
                        }
            }
 


        }
        .fixed {
            position:fixed;
            width: 100%;
            transform:translateY(-1.5rem);
            left: 0;
            z-index:999;
           
        }
        .bgColor {
            background:linear-gradient(to bottom ,indigo,violet);
        }
        
        .failScroll {
            overflow: hidden !important;
            height: 100%;
}
`