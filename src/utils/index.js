// import { usePrevious } from './hooks'
// import dictionary from './dictionary'

// 获取cookie
// cooKieName {string} 要获取的cookie名称
function getCookie (cookieName) {
  let name = `${cookieName}=`
  let allCookieArr = document.cookie.split(';')
  for (let i = 0; i < allCookieArr.length; i++) {
    let cookie = allCookieArr[i]
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1)
    if (cookie.indexOf(name) !== -1) {
      return cookie.substring(name.length, cookie.length)
    }
  }
  return ''
}

// 设置cookie
// cooKieName {string} 要设置的cookie名称
// value {string} 要设置的cookie值
// exdays {number} 过期天数
function setCookie (cookieName, value, exdays = 1) {
  let d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  let expires = `expires=${d.toUTCString()}`
  document.cookie = `${cookieName}=${value}; ${expires}`
}

module.exports = {
  // dictionary,
  getCookie,
  setCookie,
  // usePrevious,
}
