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
    let res = todos.filter((el, i) => i != id)
    res = res.map(res.pop, [...res])
    return {
        type: types.REMOVE_TODO,
        removeTodos: res
    }
}

export function createTodo(todos, name) {
    const id = todos[todos.length-1].id
    const res = [...todos, {
        "userId": 1,
        "id": id+1,
        "title": name,
        "completed": false,
    }]

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

