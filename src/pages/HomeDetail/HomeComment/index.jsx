import React, { useEffect, useState, memo } from 'react'
import { Wrapper, EnterLoading } from './style'
import { connect } from 'react-redux'
import { Tabs, Badge } from 'antd-mobile'
import starImg from '@/assets/images/star.png'
import loading_pic from '@/assets/images/loading.gif'
// 组件
import Scroll from '@/components/common/Scroll'
// 图片延迟加载
import LazyLoad, { forceCheck } from 'react-lazyload'
import Loading from '@/components/common/loading'
import { getCommentsList, getNavList } from './store/actionCreators'

function HomeComment(props) {

  const { comments, navList, loading } = props
  const { getCommentsListDispatch, getNavListDispatch } = props
  useEffect(() => {
    getCommentsListDispatch()
    getNavListDispatch()
  }, [])
  const navlist = () => {
    return navList.map(item => {
      return (
        <span className='item' key={item.label_id}>{item.content}</span>
      )
    })

  }
  const contentlist = () => {
    return comments.map((item) => {
      return (
        <li className="comment-item" key={item.wm_comment_id}>
          <div className="comment-header">
            <img src={item.user_pic_url ? item.user_pic_url : starImg} />
          </div>
          <div className="comment-main">
            <div className="user">
              {item.user_name}
            </div>
            <div className="time">
              {new Date().toLocaleDateString()}
            </div>
            <div className="star-wrapper">
              <span className="text">评分</span>
              <div className="star star">
                <span className="star-item on"></span>
                <span className="star-item on"></span>
                <span className="star-item on"></span>
                <span className="star-item on"></span>
                <span className="star-item on"></span>
              </div>
            </div>

            <div className="content">
              <span>{item.comment}</span>
              {item.user_pic_url &&
                <LazyLoad

                  placeholder={<img width="100%" height="100%" src={loading_pic} />}>
                  <img
                    width="100%"
                    height="100%"
                    src={item.user_pic_url}
                  />
                </LazyLoad>
              }
            </div>
          </div>
        </li>
      )
    })


  }
  return (
    <Wrapper>
      <Scroll onScroll = {forceCheck}>
      <div className="rating">
        <div className="rating-left">
          <div className="rating-left-hd">4.5</div>
          <div className="rating-left-bd">商家评分</div>
        </div>
        <div className="rating-md">
          <div className="rating-md-main">
            <div className="rating-md-main-desc">口味</div>
            <div className="rating-md-main-foot">
              <div className="rating-md-main-pic">
                <img src={starImg} alt="" />
              </div>
            </div>
            <div className="rating-md-main-score">4.6</div>
          </div>
          <div className="rating-md-main">
            <div className="rating-md-main-desc">包装</div>
            <div className="rating-md-main-foot">
              <div className="rating-md-main-pic">
                <img src={starImg} alt="" />
              </div>
            </div>
            <div className="rating-md-main-score">4.7</div>
          </div>
        </div>
        <div className="rating-footer">
          <div className="rating-footer-score  ">4.9</div>
          <div className="rating-footer-desc">配送评分</div>
        </div>
      </div>
      <Tabs>
        <Tabs.Tab title='全部' key='all'>
          <div className="labels-view">
            {
              navlist()
            }
          </div>
          <ul className='rating-list'>
            {contentlist()}
          </ul>
        </Tabs.Tab>
        <Tabs.Tab title='有图' key='pic'>
          <div className="labels-view">
            {
              navlist()
            }
          </div>
          <ul className='rating-list'>
            {
              comments.map((item) => {
                return (
                  item.user_pic_url &&
                  <li className="comment-item" key={item.wm_comment_id}>
                    <div className="comment-header">
                      <img src={item.user_pic_url ? item.user_pic_url : starImg} />
                    </div>
                    <div className="comment-main">
                      <div className="user">
                        {item.user_name}
                      </div>
                      <div className="time">
                        {new Date().toLocaleDateString()}
                      </div>
                      <div className="star-wrapper">
                        <span className="text">评分</span>
                        <div className="star star">
                          <span className="star-item on"></span>
                          <span className="star-item on"></span>
                          <span className="star-item on"></span>
                          <span className="star-item on"></span>
                          <span className="star-item on"></span>
                        </div>
                      </div>

                      <div className="content">
                        <span>{item.comment}</span>
                        <img
                          width="100%"
                          height="100%"
                          src={item.user_pic_url}
                        />
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </Tabs.Tab>
        <Tabs.Tab
          title={
            <Badge content='222' style={{ '--right': '-10px', '--top': '8px' }}>
              点评
            </Badge>
          }
          key='animals'
        >
          <div className="labels-view">
            {
              navlist()
            }
          </div>
        </Tabs.Tab>
      </Tabs>
      {
        loading ?
          <EnterLoading>
            <Loading></Loading>
          </EnterLoading> : null
      }
      </Scroll>
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    comments: state.comment.CommentsList,
    navList: state.comment.NavList,
    loading: state.comment.Loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCommentsListDispatch() {
      dispatch(getCommentsList())
    },
    getNavListDispatch() {
      dispatch(getNavList())
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComment)