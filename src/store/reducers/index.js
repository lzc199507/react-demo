import { combineReducers } from 'redux'
import { setCookie } from 'utils'
import listReducer from './listReducer'
import movieReducer from './movieReducer'

const defaultState = {
  Title: '',
  cityCode: '',
  cityName: '',
  categoryIdx: 0,
  initIndexData: {},
  isLogin: false,
}

function appReducer (state = defaultState, action) {
  const { payload } = action
  switch (action.type) {
    case 'init':
      return {
        ...state,
        ...payload,
      }
    case 'initIndexData':
      return {
        ...state,
        ...payload,
      }
    case 'setCityCode':
      setCookie('cityCode', payload.cityCode)
      return {
        ...state,
        ...payload,
      }
    case 'setCityName':
      setCookie('cityName', payload.cityName)
      return {
        ...state,
        ...payload,
      }
    case 'setCategoryIdx':
      return {
        ...state,
        ...payload,
      }
    case 'setSignIn':
      console.log('payload', payload)
      return {
        ...state,
        ...payload,
      }

    default:
      return state
  }
}


export default combineReducers({
  app: appReducer,
  listPage: listReducer,
  movie: movieReducer,
})
