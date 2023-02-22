

export const localStorageKey = 'yyx'




const Cookie = {
  // 熊猫博士H5登录系统的cookie
  Token: 'dptoken',
  Path: '/',
  Prefix: {
    local: 'dev-',
    dev: 'dev-',
    pre: 'pre-',
    prod: 'prod-'
  }
}

const getCookieName = (name) => {
  const envPrefix = Cookie.Prefix.local
  return `${envPrefix}${name}`
}

/**
 * 因为现在H5项目三个环境部署在一个domain下，为了满足目前需要相同环境相同name的cookie共享的需求，所以用name来区分各环境的cookie, path为/
 * 每个name在set/get/remove会dev/pre环境的关键字。例：before: name=token after(dev/pre): name=(dev/pre)-token，线上不拼接
 * @param name
 * @param value
 * @param days
 */
export const setCookie = (name, value, days = 30) => {
  console.warn('setCookie', name)
  // 单独校验 token 的长度
  // if (name === Cookie.Token && value?.length < 64) {
  //   return
  // }
  const cookieName = getCookieName(name)
  cookieName && removeCookie(name)
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)

  document.cookie = `${cookieName}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=${Cookie.Path}`
}

/**
 * 移除指定name的cookie
 * @param name
 */
export const removeCookie = (name) => {
  console.warn('removeCookie', name)
  // 删除一个现存 Cookie 的唯一方法，是设置它的expires属性为一个过去的日期
  const cookieName = getCookieName(name)
  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${Cookie.Path}`
}

/**
 * 获取指定name的cookie
 * @param name
 */
export const getCookie = (name) => {
  const cookieName = getCookieName(name)
  const cookieArr = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]*)(;|$)`))

  if (cookieArr?.length) {
    return decodeURIComponent(cookieArr[2])
  }
  return null
}
