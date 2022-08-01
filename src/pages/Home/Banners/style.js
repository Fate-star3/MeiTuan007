import styled from 'styled-components'

export const Wraper = styled.div`
    /* position:absolute; */
    /* top:110px; */
    background-color: #fff;
    background-image: linear-gradient(180deg, #fff, #F5F5F6 78%);
    height: 9rem;
    border-radius:0.45rem 0.45rem 0 0;

.btn_banners{
    width:100%;
    height:50vw;
    background:#fff;
    border-radius:0.45rem;
    border-radius:0.45rem 0.45rem 0 0;
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
    
}
.swiper-item{
    display:flex;
    width: 20%;
    height: 40%;
    justify-content: space-around;
    
    
} 
.swiper-item div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:0.94rem;
    span {
        display:inline-block;
        padding-top: 0.5rem;
        font-size:0.5rem;
    }
    
}
.swiper-item div p{
    height:1.88rem;
    width:1.88rem;
    margin-bottom:0.19rem;

  
}
.swiper-item div img{
    height:100%;
    width:100%;
   
}
    
`