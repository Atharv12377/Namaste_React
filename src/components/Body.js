
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
import listOfRestaurant from "../utils/mockData"

const Body = () => {
    //Creating state variable maintains the state of the component
    const [listOfRestaurants, setlistOfRestaurants] = useState(listOfRestaurant)
    return (
        <div className="Body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("hello")
                    const filteredList = listOfRestaurants.filter((res) => {
                        return res.data.avgRating > 4
                    })
                    setlistOfRestaurants(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }


            </div>

        </div>
    )
}

export default Body