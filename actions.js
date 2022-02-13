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

export function removeTodo(id, todos) {
    const res = todos.filter((el, i) => i != id)
    return {
        type: types.REMOVE_TODO,
        removeTodos: res
    }
}

export function createTodo(todos, name) {
    const arr = todos.map((obj, i)=>({...obj, id: i+1}));
    const res = [{
        "userId": 1,
        "id": 0,
        "title": name,
        "completed": false
    }, ...arr]

    return {
        type: types.CREATE_TODO,
        createTodos: res
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

