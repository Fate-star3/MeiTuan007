import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color:#fafafa;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size:0.8rem;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #333;
        /* 添加& 是为了取消空格  在a元素本身上添加类名 而不是子代元素 */
        &.active {
            color: #EEF20D;
            div:first-child {
                transform: scale(0.83);
                transform-origin: 50% 0;
            }
            div.icon_home {
            background-image: url('https://p0.meituan.net/openhfiveimages/f7f4061b6d1e5a9a5a6144bedfb593432668.png');
                
            }
            div.icon_order {
            background-image: url('https://p0.meituan.net/openhfiveimages/fa201e6feb336022931346cca218b8042604.png');
                
            }
            div.icon_mine{
            background-image: url('https://p0.meituan.net/openhfiveimages/af323b0b129aaf7534b2d4e2847c1beb2070.png');
                
            }
        }
        
        i{
            font-size: 1rem;
        }
        .icon_home {
            width: 30px;
            height: 30px;
            margin-top: 2px;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('https://p0.meituan.net/openhfiveimages/bdf47adddc0719e1f82fd8fc39dad325789.png');
            background-size: contain;
        }
        .footer_home {
            margin-bottom: 3px;
            font-size: 12px;
            line-height: 14px;
            width: 30px;
            text-align: center;
            display: inline-block;
        }
        .icon_member {
            width: 30px;
            height: 30px;
            margin-top: 2px;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('https://p0.meituan.net/openhfiveimages/f7f4061b6d1e5a9a5a6144bedfb593432668.png');
            background-size: contain;
        }
        .footer_member {
            margin-bottom: 3px;
            font-size: 12px;
            line-height: 14px;
            width: 30px;
            text-align: center;
            display: inline-block;
        }
        .icon_order {
            width: 30px;
            height: 30px;
            margin-top: 2px;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('https://p0.meituan.net/openhfiveimages/c6585a556cf072520d844211ddac5de1717.png');
            background-size: contain;
            

        }
        .footer_order {
            margin-bottom: 3px;
            font-size: 12px;
            line-height: 14px;
            width: 30px;
            text-align: center;
            display: inline-block;

        }
        .icon_mine {
            width: 30px;
            height: 30px;
            margin-top: 2px;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('https://p0.meituan.net/openhfiveimages/ebb67bf289f1a8a6d4deee9bf886dfd8777.png');
            background-size: contain;
         }
        .footer_mine {
            margin-bottom: 3px;
            font-size: 12px;
            line-height: 14px;
            width: 30px;
            text-align: center;
            display: inline-block;

         }
        
    }
` 