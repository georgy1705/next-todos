import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { createTodo, fetchTodos, removeTodo } from "../actions"
import { MainLayout } from "../layouts/layout"
import styles from "../styles/Todos.module.css"

const Todos = () => {
    const [counter, setCounter] = useState(10)
    const [switchInput, setSwitchInput] = useState(false)
    const [inputCreate, setInputCreate] = useState('')

    const todos = useSelector((state) => state.todos)
    const loading = useSelector((state) => state.loading)
    const inputClasses = ['input']
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const loadMore = () => {
        setCounter(prev => prev + 10)
    }

    useMemo(() => {
        if (switchInput) {
            inputClasses.push('edit')
        } 
    }, [switchInput])

    const editTodo = () => {
        setSwitchInput(state => !state)
    }

    const res = todos.map(todos.pop, [...todos])

    const renderTodos = () => res.slice(0, counter).map((todo, i) => {
            return (
                <div className={styles.todos} key={todo.id}>
                    <input type="checkbox" className={styles.complete} defaultChecked={todo.completed}/>
                    <li>
                        {
                            switchInput ?
                            <input 
                                type="text" 
                                defaultValue={todo.title} 
                                className={styles[inputClasses.join(' ')]}
                            /> :
                            <input 
                                type="text" 
                                defaultValue={todo.title} 
                                className={styles[inputClasses.join(' ')]}
                                readOnly
                            />
                        }
                    </li>
                    <i 
                        className={"fas fa-times delete " + styles.delete} 
                        onClick={() => dispatch(removeTodo(i, res))}
                        title="delete"
                    >
                    </i>
                    <div onClick={editTodo} className={styles.editText}>Change</div>
                </div>
                
            )
    })

    return (
        <MainLayout>
            <div className="container">
                {
                    loading ? 
                    <div className={styles.loading}>Loading...</div> : 
                    <>
                        {renderTodos()}
                        <div className={styles.CreateTodo}>
                            <input type="text" onChange={e => setInputCreate(e.target.value)}/>
                            <button className="btn btn-sm btn-danger" onClick={() => dispatch(createTodo(todos, inputCreate))}>Create todo</button>
                        </div>
                        
                        {todos.length >= counter ?
                            <button className="btn btn-info mt-3" onClick={loadMore}>Load more</button> :
                            null}   
                    </>
                    
                
                }
            </div>
            
        </MainLayout>
    )
}

export default Todos