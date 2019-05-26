import { createStore } from 'redux'
import reducer from './reducer'
import { getCookie } from './utils'
import { queryIndexData } from './server'

const store = createStore(reducer)

let toggle = false

function select (state) {
  return state.cityCode
}
let currentValue = ''

store.subscribe(() => {
  if (toggle) {
    let previousValue = currentValue
    currentValue = select(store.getState())

    if (previousValue !== currentValue) {
      console.log('cityCode changed from', previousValue, 'to', currentValue)
      queryIndexData({ cityCode: currentValue }).then((res) => {
        store.dispatch({
          type: 'initIndexData',
          initIndexData: res.data.result,
        })
      })
    }
  }

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
