import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"


/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - Card/Restaurent Container
 * -- Restaurent Card - img, name of res, cuisine, delivery time
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */






const AppLayout = () => (
    <div className="App">
        <Header />
        <Body />
    </div>
)




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)