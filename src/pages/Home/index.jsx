import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Wrapper } from './style'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import WEUI from 'react-weui'
import { useSearchParams, useNavigate } from 'react-router-dom';
// 组件
import SetMeal from './SetMeal';
import StoreList from './StoreList'
import StoreInfo from './StoreInfo'
import CitySelect from './CitySelect'
import Banners from './Banners';
import Modal from './Modal';
// api
import { isFixed, backGroundColor } from '@/api/utils'
import { getRestaurantsList, getBannersList } from './store/actionCreators'

function Home(props) {
  const { restaurants, banners, loading } = props
  const { getRestaurantsListDispatch, getBannersListDispatch } = props
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const { SearchBar } = WEUI
  const [search] = useSearchParams()
  const cityName = search.get('name') || ''
  const containerRef = useRef()
  
  useEffect(() => {
    getBannersListDispatch()
    getRestaurantsListDispatch()

    isFixed('.container', 1)
    backGroundColor('.container')
    document.querySelector('.search').addEventListener('click', function () {
      navigate('/search')
    })
    document.querySelector('.w').classList.add('failScroll')
  }, [])

  const onModalClose = () => {
    // 将自有的 visible 变为false 为了触发下次点击事件
    setVisible(false)
    document.querySelector('.kk-filter-wrapper').classList.remove('fixed')
    containerRef.current.classList.remove('fixed')
  }

  return (

    <Wrapper className='w'>
      <div className='container' ref={containerRef}>
        <div className="wraper" >
          <CitySelect cityName={cityName} className='city' />
          <SearchBar
            placeholder="请输入商家或者商品名称"
            lang={{ cancel: '取消' }}
            className='search'
          />
        </div>
      </div>
      <Banners banners={banners} />
      <SetMeal />
      <StoreList methods={setVisible} containerRef={containerRef} />
      <Modal
        visible={visible}
        onClose={onModalClose} />
      <StoreInfo
        restaurants={restaurants}
        loading={loading} />
    </Wrapper>

  )
}
const mapStateToProps = (state) => {
  return {
    banners: state.home.BannersList,
    restaurants: state.home.RestaurantsList,
    loading: state.home.Loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannersListDispatch() {
      dispatch(getBannersList())
    },
    getRestaurantsListDispatch() {
      dispatch(getRestaurantsList())
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

