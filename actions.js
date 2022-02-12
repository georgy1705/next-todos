import axios from 'axios'
import * as types from './types'

export function loadingStart() {
    return {
        type: types.START_LOADING
    }
}

export function fetchTodosError(e) {
    return {
        type: types.FETCH_BOOKS_ERROR,
        error: e
    }
}

export const fetchTodos = () => (dispatch) => {
    dispatch(loadingStart())

    try {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            dispatch({
                type: types.FETCH_TODOS_SUCCESS,
                payload: response.data
            })
        })

    } catch (e) {
        dispatch(fetchTodosError(e))
    }
}

