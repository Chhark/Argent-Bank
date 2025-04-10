import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { infosUser } from "../features/user/userslice"


function Profile() {
    const Dispatch = useDispatch()
    const token = useSelector((state) => state.user.token)
    const userInfos = useSelector((state) => state.user.userInfo)

    useEffect(() => {
        if (token) {
            Dispatch(infosUser())
        }
    },[Dispatch, token])

    return (
        <main className="main">
            <h1>Bienvenue, {userInfos?.firstName} {userInfos?.lastName} 👋</h1>
        </main>
    )
}

export default Profile