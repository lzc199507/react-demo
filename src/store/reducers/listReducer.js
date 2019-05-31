const defaultState = {
  listData: {
    list: [],
    hasMore: true,
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
  console.log('payload', payload)
  switch (action.type) {
    case 'setListData':
      console.log('state', state)
      state.listData.list = [...state.listData.list, ...payload.list]
      state.listData.hasMore = payload.hasMore
      return {
        ...state,
      }
    case 'setQueryParams':
      state.listData.queryParams = { ...state.listData.queryParams, ...payload }
      return {
        ...state,
      }
    case 'resetListData':
      state.listData.list = []
      state.listData.queryParams.page = '1'
      return {
        ...state,
      }

    default:
      return state
  }
}
