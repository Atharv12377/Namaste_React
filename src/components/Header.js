import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
export const Header = () => {
    const onlineStatus = useOnlineStatus()
    const [btnName, setbtnName] = useState("Login")



    return (<div className="flex justify-between border-red-400 border-4 bg-amber-100 shadow-xl">
        <div className="logo-container ">
            <img className="max-w-44" src={LOGO_URL } alt="" />
        </div>
        
        <div className="nav-items flex items-center"> 
            <ul className="flex w-full space-x-5 ">
                <li className=" border-r-2 p-3 border-r-black">Online Status: {onlineStatus? "Online": "Offline"}</li>
                <Link to={`/`} className="link-header"><li className=" border-r-2 p-3 border-r-black">Home</li></Link>
                <Link to={"/about"} className="link-header"><li className=" border-r-2 p-3 border-r-black">About Us</li></Link>
                <Link to={"/contact"} className="link-header"><li className=" border-r-2 p-3 border-r-black">Contact Us</li></Link>
                <Link className="link-header"><li className=" border-r-2 p-3 border-r-black">Cart</li></Link>
                <Link to={"/grocery"}
                className="link-header"><li className=" border-r-2  p-3 border-r-black">Grocery</li></Link>
                <button className="login" onClick={() =>{
                   btnName === "Login"? setbtnName("Logout") : setbtnName("Login")
                }}>{btnName}</button>
                
            </ul> 
        </div>
        
    </div>)
} 

export default Header
