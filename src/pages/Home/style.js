import styled from 'styled-components'

export const Wrapper = styled.div`
      /* @keyframes move {
        0%{
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100%{
            opacity: 0;
        }
      } */
      overflow:auto;
        .container {
            /* position:relative; */
            background-color: #ffcc33;
            height: 4.2rem;
            transition:all 0.3s ease-in-out;
            .wraper {
                width: 94%;
                margin: 0 auto;
                .search {
                    /* position:relative; */
                    background-color:#fff;
                    padding: 5px;
                    border-radius:50px;
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
         /* .city {
           animation: name duration timing-function delay iteration-count direction fill-mode;  
           animation:move 1s ease-in-out;
        }  */
        .failScroll {
            overflow: hidden !important;
            height: 100%;
}
`