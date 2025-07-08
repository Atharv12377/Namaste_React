
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {
    console.log("re rendering")
    //Creating state variable maintains the state of the component
    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    //gridElements  infoWithStyle restaurants

    const [filteredRestaurant, setfilteredRestaurant] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json")
        const JsonData = await data.json()
        console.log(JsonData)
        console.log(JsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //We can do optional chaining here - 
        setlistOfRestaurants(JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //we updated the filtered restaurant too. 
        setfilteredRestaurant(JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(JsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id)

    }
    //Code for Shimmer UI - 
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    //     console.log("Shimmering")
    // } //we can write conditional rendering like this or also using ternary operator ? 
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        

        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        const filteredRes = listOfRestaurants.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                       setfilteredRestaurant(filteredRes)
                    }}>Search</button>
                    <button onClick={() => {
                        fetchData();
                    }}>Back</button>
                </div> 


                <button className="filter-btn" onClick={() => { 
                    console.log("hello")  
                    const filteredList = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    setlistOfRestaurants(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>



            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant, index) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }


            </div>

        </div>
    )
}

export default Body