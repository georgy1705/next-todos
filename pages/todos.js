import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchTodos } from "../actions"
import { MainLayout } from "../layouts/layout"
import styles from "../styles/Todos.module.css"

const Todos = () => {
    const [counter, setCounter] = useState(10)
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    
    const loadMore = () => {
        setCounter(prev => prev + 10)
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const renderTodos = () => todos.slice(0, counter).map(todo => {
            return (
                <div className={styles.todos} key={todo.id}>
                    <li>
                        {todo.title}
                    </li>
                    <input type="checkbox" className={styles.complete} defaultChecked={todo.completed}/>
                </div>
                
            )
    })

    return (
        <MainLayout>
            <div className="container">
                {renderTodos()}
                {
                    todos.length >= counter ?
                        <button className="btn btn-info mt-3" onClick={loadMore}>Показать еще</button> :
                        null
                }
                
            </div>
            
        </MainLayout>
    )
}

export default Todos