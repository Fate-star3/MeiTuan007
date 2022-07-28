import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 1rem;
    padding: 10px;
    .citygps {
        font-weight: 1000;
         font-size: 3.73333333vw;
         color: #222426;
         line-height: 4.53333333vw;
         flex: auto;
         display: flex;
         align-items: center;
         padding-left: 10px;
        .icon_city::before {
            content: '';
            width: 4vw;
            height: 4.26666667vw;
            background: url('https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/49a69bf24426efccf9052517c2315ba6.png');
            background-repeat: no-repeat;
            background-size: contain;
            display: inline-block;
            margin-right: 5px;
            -webkit-flex-shrink: 0;
            flex-shrink: 0;
        }
        .icon_city-next::after {
            content: '';
            width: 10px;
            height: 10px;
            background: url('https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/19e92a43d328266f4482bcc26f81f652.png');
            background-size: contain;
            background-repeat: no-repeat;
            display: inline-block;
            margin-left: 2px;
            margin-right: 20px;
        }
    }
    
`