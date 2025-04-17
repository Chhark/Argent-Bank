import { Link } from "react-router-dom";
import logo from "../../assets/Front-img/argentBankLogo.png"
import "./headerStyle.scss"
import { useDispatch, useSelector } from "react-redux";
import { Edit, logout } from "../../features/user/userslice";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const connect = useSelector((state) => state.user.isLoggedIn)
  const userName = useSelector((state) => state.user.userInfo?.userName)
  const Dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  function param() {
    if (location.pathname === "/profile"){
      Dispatch(Edit())
    }else{
      Dispatch(Edit())
      navigate("/profile")
    }
  }

  return(
    <div className="header">
        <img src={logo}  alt="Argent-Bank" />
        {connect
          ? <div className="headerMenu"><Link to="/profile" className="HeaderLink"><i class="fa-solid fa-circle-user"></i> {userName}</Link>
          <button onClick={param} className="HeaderLink">parametre</button>
          <button onClick={() => Dispatch(logout())} className="HeaderLink">Logout</button>
          </div>
          :<Link to="/connection" className="HeaderLink"><i class="fa-solid fa-circle-user"></i> Sign In</Link>

        }
        
    </div>
  )  
}
export default Header