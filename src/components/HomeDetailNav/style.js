import styled from 'styled-components'

export const Wrapper = styled.div`
.navbar{
    height: 35px;
    background:#fff;
    border-bottom: 1px solid #ccc;
    .nav-box{
        display:flex;
        height: 35px!important;
        line-height: 35px!important;
        position:relative;
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
        border-bottom: 1px solid #ebebeb;
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
    
    ._2eXeTl_BESb4iT-0WlHcaG {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    display: flex;
    width: 57px;
    margin: 0 10px;
    position: relative;
    background: #fff;
    border-radius: 100px;
    margin-left: 100px;
}
._2eXeTl_BESb4iT-0WlHcaG input {
    width: 100%;
    background: #eee;
    -webkit-align-self: center;
    align-self: center;
    position: relative;
    border: none;
    height: 25px;
    padding-left: 23px;
    box-sizing: border-box;
    border-radius: 15px;
    overflow: hidden;
    opacity: 1;
}
    ._2eXeTl_BESb4iT-0WlHcaG .hPfx1lboARt57b7-TmUkf {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
._2eXeTl_BESb4iT-0WlHcaG .hPfx1lboARt57b7-TmUkf ._2TpbiU8xb0dZksC63RzV_R {
    background: url("https://p0.meituan.net/openhfiveimages/a7b59ad3ad25e21f59e0b4feb53647dd1517.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 12px;
    height: 12px;
    -webkit-flex: none;
    flex: none;
    margin-left: 6px;
    margin-right: 4px;
}
._2eXeTl_BESb4iT-0WlHcaG .hPfx1lboARt57b7-TmUkf ._14y9Nh9BIFkJnO0qrwNtcU {
    -webkit-flex: auto;
    flex: auto;
    font-size: 12px;
    color: #222426;
    font-weight: 600;
    text-align: center;
    margin-right: 2px;
}
._2eXeTl_BESb4iT-0WlHcaG .hPfx1lboARt57b7-TmUkf .RfVKwPPkC35EzrFFx8Waz {
    -webkit-flex: auto;
    flex: auto;
    font-size: 11px;
    color: #858687;
    text-align: center;
    margin-right: 10px;
    display: none;
}
}
`