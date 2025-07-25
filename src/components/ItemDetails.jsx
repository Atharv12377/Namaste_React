import { useContext } from "react"
import UserContext from "../utils/userContext"

const ItemDetails = ({itemdata}) =>{
    const {loggedInUser} = useContext(UserContext) //We can use the data in the context we created using this useContext hook. And we did not need to drill the data all the way in this deeply located component.
     
    console.log(itemdata)
    return(
        <div className="w-full  p-5">
           {itemdata.map((items)=>{
            return(
                <div key={items.card.info.id} className=" m-4 flex justify-between p-3 bg-gray-100 shadow-xl border-b-2 border-b-gray-300">
                   <span className="">{items.card.info.name}</span> 
                   <span>{items.card.info.price/100} Rs {loggedInUser}</span>
                   <span><button className="bg-pink-300 rounded-lg">ADD</button></span>
                </div>
            )
            
           })}
        </div>
    )

}
export default ItemDetails