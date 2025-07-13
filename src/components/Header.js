import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
export const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL } alt="" />
        </div>
        
        <div className="nav-items">
            <ul>
                <Link to={`/`} className="link-header"><li>Home</li></Link>
                <Link to={"/about"} className="link-header"><li>About Us</li></Link>
                <Link to={"/contact"} className="link-header"><li>Contact Us</li></Link>
                <Link className="link-header"><li>Cart</li></Link>
                <button className="login" onClick={() =>{
                   btnName === "Login"? setbtnName("Logout") : setbtnName("Login")
                }}>{btnName}</button>
                
            </ul> 
        </div>
        
    </div>)
} 

export default Header
