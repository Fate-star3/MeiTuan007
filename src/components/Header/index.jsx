import React from 'react'
import {pageTitle} from '@/config/index.js'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const {pathname}= useLocation()
  // console.log(pathname);
  return (
    <div>{pageTitle[pathname]}</div>
  )
}
