import { createStore } from 'redux'
import { getCookie } from 'utils'
import { queryIndexData } from 'server'
import reducer from './reducers'

const store = createStore(reducer)

let toggle = false

function select (state) {
  return state.app.cityCode
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
          payload: {
            initIndexData: res.data.result,
          },
        })
      })
    }
  }

  if (!toggle) {
    toggle = true
    console.log('初始化 || 获取并设置cityCode和cityName')
    let golbalCode = getCookie('cityCode')
    if (golbalCode === '' || golbalCode === 'undefined') golbalCode = '021'
    store.dispatch({
      type: 'setCityCode',
      payload: {
        cityCode: golbalCode,
      },
    })
    let golbalName = getCookie('cityName')
    if (golbalName === '' || golbalName === 'undefined') golbalName = '上海'
    store.dispatch({
      type: 'setCityName',
      payload: {
        cityName: golbalName,
      },
    })
  }
})

export default store
