import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import HomeDateBar from "../HomeDateBar"

export default function HomePage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)


    if (!sessionUser) return <Redirect to='/signup' />
    return (
        <>
            <h1>Welcome to home page</h1>
            <HomeDateBar />
        </>
    )
}
