import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
 
const RestaurantMenu = () =>{
    const {resid} = useParams()
    const resInfo = useRestaurantMenu(resid) //using this custom hook we can make this component more readable and testable, this is a good practice of writing the code.
   

    if(resInfo === null){
        return <Shimmer />
    }
 
   const infoCard = resInfo.cards.find((card) => card?.card?.card?.info);
const { name, avgRating, costForTwoMessage } = infoCard?.card?.card?.info || {};

const regularGroup = resInfo.cards.find(
  (card) => card?.groupedCard?.cardGroupMap?.REGULAR
);
const regularItems = regularGroup?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

const menuCard = regularItems.find((c) => c?.card?.card?.itemCards);
const itemCards = menuCard?.card?.card?.itemCards || [];

const categories  = regularItems.filter((category)=>{
    return category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
})
console.log(categories)
//console.log(regularItems[1].card.card)

    return(
   
        <div className="text-center">
             <h1 className="font-bold text-5xl m-6">{name}</h1>
        <h3 className="font-medium text-2xl m-1">Average Rating: {avgRating}</h3>
        <h3>Cost:  {costForTwoMessage}</h3>
        {/* Here we need accordian, which has a header and a collapsable  body */}
        <RestaurantCategory categories = {categories}/>
       </div>
       
    )
}
export default RestaurantMenu