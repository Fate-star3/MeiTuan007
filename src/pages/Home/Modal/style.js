import styled from "styled-components";
export const Wrapper = styled.div`
    .modal-filter {
    position: fixed;
    z-index: 1200;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.modal-filter .modal-mask {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    overflow: hidden;
}
.modal-filter .modal-wrapper {
    position: relative;
    background-color: #fff;
    border-radius: 0 0 .12rem .12rem;
    z-index:999;
}
.modal-filter .modal-content {
    background-color: #fff;
    /* max-height: 4rem; */
    overflow-y: scroll;
    border-radius: 0 0 .12rem .12rem;
    overscroll-behavior: contain;
}
.modal-filter .modal-sort {
    padding: 0 .12rem;
}
.modal-filter .modal-sort .sort-item.active-sort {
    font-weight: 500;
    color: #ff8000;
}
.modal-filter .modal-sort .sort-item {
    font-size: 14px;
    color: #666460;
    line-height: 44px;
    position: relative;
    overflow: visible;
}
 .sort-item::after {
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
}

 .sort-item::after {
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
}
.modal-filter .modal-sort .sort-item::after {
    pointer-events: none;
    position: absolute;
    z-index: 899;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: " ";
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border-color: #f1f1f2;
    border-style: solid;
    border-width: 0 0 1px 0;
}
.modal-filter .modal-sort .sort-item {
    font-size: 14px;
    color: #666460;
    line-height: 44px;
    position: relative;
    overflow: visible;
}
`