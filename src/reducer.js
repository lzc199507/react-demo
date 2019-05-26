import { setCookie } from './utils'

const defaultState = {
  Title: '',
  initIndexData: {},
  listData: {
    list: [],
    showSortsModal: false,
    queryParams: {
      date: '',
      order: '-1',
      page: '1',
    },
  },
  isShowOrder: '',
  isCalendar: false,
  isShowBox: false,
  cityCode: '',
  cityName: '上海',
  categoryIdx: 0,
  isShowNav: false,
  isShowGallery: {
    bool: false,
    src: '',
  },
}

export default function reducer (state = defaultState, action) {
  const { payload } = action
  switch (action.type) {
    case 'init':
      return {
        ...state,
        Title: action.Title,
      }
    case 'initIndexData':
      return {
        ...state,
        initIndexData: action.initIndexData,
      }
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
      state.listData = { ...state.listData, ...payload }
      return {
        ...state,
      }
    case 'setQueryParams':
      console.log('payload', payload)
      state.listData.queryParams = { ...state.listData.queryParams, ...payload }
      return {
        ...state,
      }

    default:
      return state
  }
}
