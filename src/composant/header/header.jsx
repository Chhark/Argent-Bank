import { Link } from "react-router-dom";
import logo from "../../assets/Front-img/argentBankLogo.png"
import "./headerStyle.scss"

function Header() {
  return(
    <div className="header">
        <img src={logo}  alt="Argent-Bank" />
        <Link to="/connection" className="HeaderLink"><i class="fa-solid fa-circle-user"></i> Sign In</Link>
    </div>
  )  
}
export default Header