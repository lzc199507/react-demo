import { setCookie } from './utils'

const defaultState = {
  initListData: {},
  isShowOrder: '',
  isCalendar: false,
  isShowBox: false,
  cityCode: '021',
  cityName: '上海',
  categoryIdx: 0,
  isShowNav: false,
  isShowGallery: {
    bool: false,
    src: '',
  },
}

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'setCityCode':
      setCookie('cityCode', action.cityCode)
      return {
        ...state,
        cityCode: action.cityCode,
      }
    case 'setCityName':
      setCookie('cityName', action.cityName)
      return {
        ...state,
        cityName: action.cityName,
      }
    case 'toggleGallery':
      return {
        ...state,
        isShowGallery: action.isShowGallery,
      }
    case 'toggleBox':
      return {
        ...state,
        isShowBox: action.isShowBox,
      }
    case 'toggleCalendar':
      return {
        ...state,
        isCalendar: action.isCalendar,
      }
    case 'toggleOrder':
      return {
        ...state,
        isShowOrder: action.isShowOrder,
      }

    case 'setCategoryIdx':
      return {
        ...state,
        categoryIdx: action.categoryIdx,
      }
    case 'setListData':
      return {
        ...state,
        initListData: action.initListData,
      }
    case 'initListData':
      return {
        ...state,
        initListData: action.initListData,
      }

    default:
      return state
  }
}
