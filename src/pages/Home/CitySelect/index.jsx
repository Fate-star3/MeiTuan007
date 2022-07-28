import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

// 子组件一般不做数据请求 由父组件统一并传参过来
export default function CitySelect(props) {
  let { cityName } = props
  window.sessionStorage.getItem("cityName") ? cityName = window.sessionStorage.getItem("cityName") : (window.sessionStorage.cityName = props.cityName)
  return (
    <Wrapper>
      <Link
        className="citygps"
        to="/cities">
        <i className="icon_city"></i>
        <span>{cityName ? cityName : '获取城市坐标'}</span>
        <i className="  next"></i>

      </Link>
    </Wrapper>
  )
}
