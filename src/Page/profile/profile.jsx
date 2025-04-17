import { useState, useEffect, use } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Edit, infosUser } from "../../features/user/userslice"
import { EditUser } from "../../features/user/userslice"
import { useNavigate } from "react-router-dom"
import "./profile.scss"


function Profile() {
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const token = useSelector((state) => state.user.token)
    const userInfos = useSelector((state) => state.user.userInfo)
    const visible = useSelector((state) => state.user.isEdit)
    const userName = useSelector((state) => state.user.userInfo?.userName)
    const connected = useSelector((state) => state.user.isLoggedIn)
    const isAuthChecked = useSelector((state) => state.user.isAuthChecked);
    const [UserName , SetUserName] = useState(userName)

    useEffect(() => {
        SetUserName(userInfos?.userName)
    },[userInfos])

    useEffect(() => {
        if (token) {
            if (!userInfos){
            Dispatch(infosUser())
            }
        }
    },[Dispatch, token])
    
    useEffect(() => {
        if(isAuthChecked && !connected){
            Navigate("/connection")
        }
    },[isAuthChecked, connected, Navigate])

    const ChangeUserName = (e) =>{
        e.preventDefault();
        Dispatch(EditUser(UserName))
    }
    return (
        <main className="main main-profile">
            {visible
                &&<div> <h2>Edit user infos</h2>
                <form onSubmit={ChangeUserName}>
                    <div className="input-wraper">
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" value={UserName} onChange={(e) => SetUserName(e.target.value)}/>
                    </div>
                    <div className="button-wraper">
                        <button className="form-button" type="submit">Save</button>
                        <button className="form-button" onClick={() => Dispatch(Edit())}>Annuller</button>
                    </div>
                </form>
                </div>
                
            }
            <h1>Bienvenue, {userInfos?.firstName} {userInfos?.lastName} 👋</h1>
        </main>
    )
}

export default Profile