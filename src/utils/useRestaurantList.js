import { useEffect, useState } from "react"

const useRestaurantList = () =>{
    const [listOfRestaurants, setlistOfRestaurants] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

     const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const JsonData = await data.json()
       // console.log(JsonData)
        console.log(JsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //We can do optional chaining here - 
        setlistOfRestaurants(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //we updated the filtered restaurant too. 
      
        // console.log(JsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id)
    }



    return [listOfRestaurants]
}
export default useRestaurantList