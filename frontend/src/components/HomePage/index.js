import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import HomeDateBar from "../HomeDateBar"

export default function HomePage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)


    if (!sessionUser) return <Redirect to='/signup' />
    return (
        <>
            <HomeDateBar />
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F12%2F08%2Farkansas-airbnb-LOVEAIRBNB1220.jpg" alt="beatiful home"></img>
        </>
    )
}
