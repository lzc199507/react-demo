const defaultState = {
  movieDetailInfo: {},
}

export default function movieReducer (state = defaultState, action) {
  const { payload } = action
  switch (action.type) {
    case 'setMovieDetailData':
      return {
        ...state,
        ...payload,
      }

    default:
      return state
  }
}
