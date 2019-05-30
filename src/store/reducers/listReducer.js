const defaultState = {
  listData: {
    list: [],
    showSortsModal: false,
    queryParams: {
      date: '',
      order: '-1',
      page: '1',
    },
  },
}

export default function listReducer (state = defaultState, action) {
  const { payload } = action
  switch (action.type) {
    case 'setListData':
      state.listData = { ...state.listData, ...payload }
      return {
        ...state,
      }
    case 'setQueryParams':
      state.listData.queryParams = { ...state.listData.queryParams, ...payload }
      return {
        ...state,
      }

    default:
      return state
  }
}
