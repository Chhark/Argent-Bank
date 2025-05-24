import { useEffect, useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import "./formStyle.scss"
import { loginUser } from "../../features/user/userslice"
import { useNavigate } from "react-router-dom"


function Form() {
    const [email , SetMail] = useState("")
    const [password , SetPassword] = useState("")
    const [remember , SetRemember] = useState("")

    const Dispatch = useDispatch()
    const Navigate = useNavigate()

    const error = useSelector((state) => state.user.error);
    const status = useSelector((state) => state.user.status);
    const isLogedIn = useSelector((state) => state.user.isLoggedIn)
    const isDisabled = email.trim() === "" || password.trim() === "";

    useEffect(() => {
      if (isLogedIn) {
        Navigate('/profile')
      }
    },[isLogedIn])

    const userConnection = (e) =>{
        e.preventDefault()
        Dispatch(loginUser({email , password , remember}));
    }
    
    return(
    <>
        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={userConnection}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" onChange={(e) => SetMail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => SetPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me"  value={remember} onChange={(e) => SetRemember(e.target.checked)}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {status === "failed" && (
            <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
          )}
          <button className="sign-in-button" disabled={isDisabled}>Sign In</button>
        </form>
      </section>
    </main>
    </>
    )
}
export default Form 