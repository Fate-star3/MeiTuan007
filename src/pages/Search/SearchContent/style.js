import styled from 'styled-components'
export const Wrapper = styled.div`
/* background-color: #fff; */
height:23rem;
.search-content {
    background: #fff;
    border-radius: 3.73333333vw;
    position: absolute;
    top: 5rem;
    left: 0;
    overflow: auto;
    z-index: 1;
    .search-content-box .search-content-nav {
    color: #222426;
    font-size: 3.73333333vw;
    margin: 5.33333333vw 3.2vw 3.2vw;
    font-weight: 600;
}
.search-content-box .search-content-link {
    background: #fff;
    margin: 3.46666667vw 2.66666667vw 1.06666667vw 2.66666667vw;
}
.search-content-box .search-content-hots {
    background: #F5F5F6;
    border-radius: 6.66666667vw;
    padding: 1.86666667vw 2.66666667vw;
    color: #5E5F60;
    margin: 0.53333333vw 1.06666667vw;
    font-size: 3.2vw;
    display: inline-block;
    position: relative;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.search-content-box a {
    text-decoration: none;
}
}

`