import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
 
const RestaurantMenu = () =>{
    const {resid} = useParams()
    const resInfo = useRestaurantMenu(resid) //using this custom hook we can make this component more readable and testable, this is a good practice of writing the code.
   

    if(resInfo === null){
        return <Shimmer />
    }
 
     const {name, avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[1]
     console.log(itemCards)
    

    return(
       <div className="res-Menu">  
        <div className="res-Info">
             <h1>{name}</h1>
        <h3>Average Rating: {avgRating}</h3>
        <h3>Cost:  {costForTwoMessage}</h3>
        </div>
        <div className="Menu">
            <h1>Menu</h1>
            <ul className="food-items">
                {
                        itemCards.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100+`Rs` || item.card.info.defaultPrice/100 || item.card.info.price}</li>  })
                }
            </ul>
        </div>
       
       </div>
    )
}
export default RestaurantMenu