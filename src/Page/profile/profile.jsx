import { useState, useEffect, use } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Edit, infosUser } from "../../features/user/userslice"
import { EditUser } from "../../features/user/userslice"
import { useNavigate } from "react-router-dom"
import "./profile.scss"
import Account from "../../composant/BankAccount/Account"


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
    const error = useSelector((state) => state.user.error);


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
            Navigate("/")
        }
    },[isAuthChecked, connected, Navigate])

    const ChangeUserName = (e) =>{
        e.preventDefault();
        Dispatch(EditUser(UserName))
    }
    return (
        <main className="main main-profile">
            {visible
                &&<div className="form-wraper"> <h2>Edit user infos</h2>
                <form onSubmit={ChangeUserName}>
                    <div className="input-wraper">
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" value={UserName} onChange={(e) => SetUserName(e.target.value)}/>
                    </div>
                    <div className="input-wraper">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={userInfos?.firstName} onChange={(e) => SetUserName(e.target.value)} disabled/>
                    </div>
                    <div className="input-wraper">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastrName" value={userInfos?.lastName} onChange={(e) => SetUserName(e.target.value)} disabled/>
                    </div>
                    {UserName === "" && <p className="error-message">Le champ ne peut pas être vide</p>}
                    {error && <p className="error-message">{error}</p>}
                    <div className="button-wraper">
                        <button className="form-button" type="submit"  disabled={UserName ===""}>Save</button>
                        <button className="form-button" onClick={() => Dispatch(Edit())}>Annuler</button>
                    </div>
                </form>
                

                </div>
                
            }
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"></Account>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Current Balance"></Account>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Available Balance"></Account>
        </main>
    )
}

export default Profile