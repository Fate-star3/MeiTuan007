import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '@/utils/index.js'

export default function Footer(props) {
  const { pathname } = useLocation()
 
  if (isPathPartlyExisted(pathname)) {
    
    return
  }
  return (
    <FooterWrapper>
      {/* Link的本质是a标签 */}
      <Link to="/home" className={classnames({ active: pathname == '/home' || pathname == '/' })}>
        <div className="icon_home"></div>
        <div className='footer_home'>首页</div>
      </Link>
      {/* <Link to="/member" className={classnames({ active: pathname == '/member' })}>
        <div className="icon_member"></div>
        <div className='footer_member'>会员</div>
      </Link> */}
      <Link to="/order" className={classnames({ active: pathname == '/order' })}>
        <div className="icon_order"></div>
        <div className='footer_order'>订单</div>
      </Link>
      <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
        <div className="icon_mine"></div>
        <div className='footer_mine'>我的</div>
      </Link>
    </FooterWrapper>
  )
}
