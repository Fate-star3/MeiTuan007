import React, { useState, useEffect, memo, useMemo } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//  useRef  DOM 相关
//  useCallback 性能优化 
import { changeEnterLoading } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import SearchBox from '@/components/common/search-box'
import SearchContent from './SearchContent'
import {
    Container,
    EnterLoading
} from './style'
// import Scroll from '@/components/common/Scroll'
// import Lazyload, { forceCheck } from 'react-lazyload'
// import Loading from '@/components/common/loading'

const Search = (props) => {
    const navigate = useNavigate();
    const { enterLoading } = props
    const { changeEnterLoadingDispatch } = props

    // 搜索内容 redux 解决共享状态问题 
    const [query, setQuery] = useState('周杰伦')
    const [show, setShow] = useState(true);

    useEffect(() => {


    }, [])


    const searchBack = () => {
        setShow(false)
    }
    // 让父子组件的query一致
    const handleQuery = (q) => {
        // console.log(q);
        setQuery(q)
    }




    return (

        // 当dom ready 组件挂载上去， 应用css transiiton效果 
        <CSSTransition
            // 如果this.state.show从false变为true，则动画入场，反之out
            in={show}
            // timeout={1000} 动画执行1秒
            timeout={1000}
            // appear：默认false 加载后自动执行
            appear={true}
            classNames="fly"
            // unmountOnExit 默认false 当动画出场后在页面上移除包裹的dom节点 但是 componentWillUnmount componentDidMount等创建不会触发
            unmountOnExit
            // onExit 结束动画触发前触发
            onExit={() => {
                navigate('/')
            }}
        >

            <Container >
                {/* 搜索框 */}
                <div className="search_box_wrapper">
                    <SearchBox
                        back={searchBack}
                        newQuery={query}
                        handleQuery={handleQuery}
                    >
                    </SearchBox>
                    <SearchContent>

                    </SearchContent>
                </div>


                {/* {enterLoading && <EnterLoading><Loading></Loading></EnterLoading>} */}

            </Container>

        </CSSTransition>




    )
}

const mapStateToProps = (state) => {
    return {
        enterLoading: state.search.enterLoading,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeEnterLoadingDispatch(data) {
            dispatch(changeEnterLoading(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Search))