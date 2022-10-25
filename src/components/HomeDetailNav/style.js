import styled from 'styled-components'

export const Wrapper = styled.div`
.navbar{
    height: 1.6rem;
    background:#fff;
    border-bottom: 0.045rem solid #ccc;
    overflow:hidden;
    .nav-box{
        display:flex;
        height: 1.6rem!important;
        line-height: 1.6rem!important;
        position:relative;
        z-index: 2;
        background-color: #fff;
    }
    .nav-item{
        width:auto!important;
        position: relative;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        justify-content: center;
        font-size: .8rem;
        color: #666;
        border-bottom: 0.045rem solid #ebebeb;
        &.active{
            ::after
        {
            content: "";
            background-color: rgb(35, 149, 255);
            width:1rem;
            height: 0.03rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
        color: #000;
        font-weight:bolder;
        }
        
    }
    
    .navbar-searchbox {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    display: flex;
    width: 2.6rem;
    margin: 0 0.45rem;
    position: relative;
    background: #fff;
    border-radius: 4.54rem;
    margin-left: 4.54rem;
}
.navbar-searchbox input {
    width: 100%;
    background: #eee;
    -webkit-align-self: center;
    align-self: center;
    position: relative;
    border: none;
    height: 1.13rem;
    padding-left: 1rem;
    box-sizing: border-box;
    border-radius: 0.68rem;
    overflow: hidden;
    opacity: 1;
}
    .navbar-searchbox .searchbox-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.navbar-searchbox .searchbox-content .searchbox-content-icon {
    background: url("https://p0.meituan.net/openhfiveimages/a7b59ad3ad25e21f59e0b4feb53647dd1517.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 0.545rem;
    height: 0.545rem;
    -webkit-flex: none;
    flex: none;
    margin-left: 0.28rem;
    margin-right: 0.18rem;
}
.navbar-searchbox .searchbox-content .searchbox-content-search {
    -webkit-flex: auto;
    flex: auto;
    font-size: 0.545rem;
    color: #222426;
    font-weight: 600;
    text-align: center;
    margin-right: 0.09rem;
}
.navbar-searchbox .searchbox-content .searchbox-content-desc {
    -webkit-flex: auto;
    flex: auto;
    font-size: 11px;
    color: #858687;
    text-align: center;
    margin-right: 0.45rem;
    display: none;
}
}
`