import * as types from './types'

const initialState = {
    todos: [],
    loading: false,
    error: null
}

const rootReducer = (state = initialState, { type }, action) => {
  switch (type) {
    case types.FETCH_BOOKS_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    case types.START_LOADING:
      return {
        ...state, loading: true
      }
    default:
      return state
  }
}


export default rootReducer