import { createStore } from 'redux'
import reducer from './reducer'
import { getCookie } from './utils'

const store = createStore(reducer)

let toggle = false

store.subscribe(() => {
  if (!toggle) {
    toggle = true
    console.log('初始化 || 获取并设置cityCode和cityName')
    let golbalCode = getCookie('cityCode')
    if (golbalCode === '') golbalCode = '021'
    store.dispatch({
      type: 'setCityCode',
      cityCode: golbalCode,
    })
    let golbalName = getCookie('cityName')
    if (golbalName === '') golbalName = '上海'
    store.dispatch({
      type: 'setCityName',
      cityName: golbalName,
    })
  }
})

export default store
