import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { debounce } from '@/api/utils';
import { NavBar } from 'antd-mobile'

const SearchBoxWrapper = styled.div`
    
    .search_input {
    position: relative;
    height: 23.06666667vw;
    background: #F5F5F5;
    }
.search_input .search_input-main {
    padding: 3.2vw;
    padding-bottom: 2.13333333vw;
    position: fixed;
    height: 14.4vw;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;
    .search_right-box {
    display: inline-block;
    width: 0.13333333vw;
    height: 3.46666667vw;
    background: #777778;
    position: absolute;
    top: 6.13333333vw;
    right: 19.2vw;
}
.search_right-text {
    font-weight: 600;
    font-size: 3.73333333vw;
    line-height: 4.8vw;
    color: #222426;
    display: inline-block;
    position: absolute;
    top: 5.33333333vw;
    right: 7.46666667vw;
}

}
.search_input .search_input-main .search_input-from {
    position: relative;
}
.search_input .search_input-main .search_input-from .search_input-v2 {
    outline: none;
    border: none;
    width: 100%;
    color: #2D3556;
    font-size: 3.73333333vw;
    line-height: 4.8vw;
    padding: 2.13333333vw 16vw 2.13333333vw 4.53333333vw;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 9.33333333vw;
    .search_input .search_input-iconfont {
    display: none;
}
.search_input .search_input-icon {
    width: 3.2vw;
    height: 3.2vw;
    display: block;
    position: absolute;
    top: 6.13333333vw;
    right: 21.46666667vw;
    background: url('https://p0.meituan.net/openhfiveimages/a415bca….png');
    background-size: contain;
    background-repeat: no-repeat;
}


}
button, input {
    overflow: visible;
}

`

const SearchBox = (props) => {
    const backTo = () => {
        back()
    }

    const queryRef = useRef();
    // console.log(queryRef, '///')
    // 解构父组件props时， 分两部分， 
    // 读props
    // 方法
    const { newQuery } = props;
    const { handleQuery, back } = props;
    const [query, setQuery] = useState('');
    // 父组件传过来的函数封装一下
    // 优化再升级
    // useMomo 可以缓存 上一次函数计算的结果 
    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 500)
    }, [handleQuery])

    // mount 
    useEffect(() => {
        // console.log(queryRef)
        // 挂载后
        // input框自动聚焦
        queryRef.current.focus();
    }, [])

    // 使用Effect Hook 可以让你在函数组件中执行副作用操作 绑定query  query更新重新渲染组件 
    useEffect(() => {
        // query 更新
        // console.log(queryRef.current);
        handleQueryDebounce(query)
    }, [query])

    useEffect(() => {
        // mount 时候 执行 父组件  newQuery -> input query 
        let curQuery = query;
        if (newQuery !== query) {
            curQuery = newQuery;
            queryRef.current.value = newQuery;
        }
        setQuery(curQuery)
        // newQuery 更新时执行
    }, [newQuery])

    const handleChange = (e) => {
        let val = e.currentTarget.value
        setQuery(val)
    }

    return (
        <SearchBoxWrapper>
            <NavBar onBack={backTo} style={{ backgroundColor: '#fff' }}>搜索页</NavBar>
            <div className="search_input">
                <div className="search_input-main">
                    <form className="search_input-from">
                        <input
                            type="text"
                            placeholder="请输入商家或商品名称"
                            className="search_input-v2"
                            value={query}
                            ref={queryRef}
                            onChange={handleChange}
                        />
                    </form>
                    <i className="search_input-icon search_input-iconfont"></i>
                    <div className="search_right-box"></div>
                    <div className="search_right-text">搜索</div>
                </div>
            </div>



        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)