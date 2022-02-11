import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchTodos } from "../actions"
import { MainLayout } from "../layouts/layout"

const Todos = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])
    return (
        <MainLayout>

        </MainLayout>
    )
}

export default Todos