import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { RES_MENU_API } from "../utils/constants"
const RestaurantMenu = () =>{
    const [resinfo, setresInfo] = useState(null)
    useEffect(()=>{
      fetResData();
    }, [])

    const {resid} = useParams()

    const fetResData = async() =>{
          const resData = await fetch(RES_MENU_API + resid)
        const JsonResData = await resData.json();
        console.log(JsonResData);
        const restaurantdata = JsonResData.data
        // .cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
        setresInfo(restaurantdata)
    }

    if(resinfo === null){
        return <Shimmer />
    }
 
     const {name, avgRating, costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info
     const {itemCards} = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[1]
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