import * as types from './types'

const initialState = {
    todos: [],
    loading: false,
    error: null
}

const rootReducer = (state = initialState, { type, error, payload }) => {
  switch (type) {
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state, loading: false, todos: payload
      }
    case types.FETCH_BOOKS_ERROR:
      return {
        ...state, loading: false, error: error
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