import { Link } from "react-router-dom";
import logo from "../../assets/Front-img/argentBankLogo.webp"
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
  function Logout(){
    Dispatch(logout())
    navigate("/")
  }

  return(
    <div className="header">
        <img src={logo}  alt="Argent-Bank" />
        {connect
          ? <div className="headerMenu"><Link to="/profile" className="HeaderLink"  style={{ color: "#00bc77" }}>{userName}<i className="fa-solid fa-circle-user fa-2xl"  style={{ color: "#00bc77",margin: "0 0 0 5px" }}></i> </Link>
          <button onClick={param} className="HeaderLink"><i className="fa-solid fa-gear fa-2xl" style={{ color: "#00bc77" }}></i></button> 
          <button onClick={() => Logout()} className="HeaderLink"><i className="fa-solid fa-power-off fa-2xl" style={{ color: "#00bc77" }}></i></button>
          </div>
          :<Link to="/connection" className="HeaderLink"><i className="fa-solid fa-circle-user"></i> Sign In</Link>

        }
        
    </div>
  )  
}
export default Header