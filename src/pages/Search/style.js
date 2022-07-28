import styled from 'styled-components';
import style from '@/assets/global-style';

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
export const Container = styled.div`
    position:fixed;
    top: 0;
    left:0;
    /* right:0;
    bottom: ${props=>props.play>0?'3rem':0}; */
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
`

export const ShortcutWrapper = styled.div`
    position: absolute;
    top: 2rem;
    bottom: 0;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
`
// 样式组件可以提供可复用的样式
export const HotKey = styled.div`
    margin: 0 1rem 1rem 1rem;
    .title {
        padding-top: 1.75rem;
        margin-bottom: 1rem;
        font-size: ${style['font-size-m']};
        color: ${style['font-color-desc-v2']};
    }
    .item {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin: 0 1rem 0.5rem 0;
        border-radius: 0.3rem;
        background: ${style['highlight-background-color']};
        font-size: ${style['font-size-m']};
        color: ${style['font-color-desc']};
    }

    
`