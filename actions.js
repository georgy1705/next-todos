import * as types from './types'

export function loadingStart() {
    return {
        type: types.START_LOADING
    }
}

export function fetchBooksError(e) {
    return {
        type: types.FETCH_BOOKS_ERROR,
        error: e
    }
}

export const fetchTodos = () => (dispatch) => {
    dispatch(loadingStart())

    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (e) {
        dispatch(fetchTodosError(e))
    }
}

