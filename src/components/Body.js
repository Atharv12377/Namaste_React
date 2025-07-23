
import RestaurantCard , {RestaurantsWithAreaName} from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useRestaurantList from "../utils/useRestaurantList"
import useOnlineStatus from "../utils/useOnlineStatus"


const ResAreaName = RestaurantsWithAreaName(RestaurantCard)
const Body = () => {
    console.log("re rendering")
    //Creating state variable maintains the state of the component
    const [searchText, setSearchText] = useState("")
    //gridElements  infoWithStyle restaurants
    const [filteredRestaurant, setfilteredRestaurant] = useState([])
    const [listOfRestaurants] = useRestaurantList() //used custom hook to shift the fetching logic to another place, then to change the filtered data and update it, used a useEffect.
       
    useEffect(() => {
        setfilteredRestaurant(listOfRestaurants)
    }, [listOfRestaurants])

    //Code for Shimmer UI - 
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    //     console.log("Shimmering")
    // } //we can write conditional rendering like this or also using ternary operator ?
    const onlineStatus = useOnlineStatus() 
    if(onlineStatus === false) return <h1>Looks like you are not online</h1>
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        

        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="h-10 p-4 w-2xs border-2 border-black m-4" placeholder="Enter the restaurant" value={searchText} onChange={(e)=> {
                        setSearchText(e.target.value)
                    }} />
                    <button className=" h-10 w-20 cursor-pointer rounded-lg bg-amber-300" onClick={() => {
                        const filteredRes = listOfRestaurants.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                       setfilteredRestaurant(filteredRes)
                    }}>Search</button>
                </div> 


                <button className="h-10  w-60 cursor-pointer p-4  border-2 border-black m-4" onClick={() => { 
                    console.log("hello")  
                    const filteredList = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    setlistOfRestaurants(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant, index) => (
                       <Link to={"/restaurants/" +restaurant.info.id} key={restaurant.info.id}> 
                       {restaurant.info.areaName? (<ResAreaName resData = {restaurant}/>) :  (<RestaurantCard  resData={restaurant} />) }
                       </Link>
                    ))
                }


            </div>

        </div>
    )
}

export default Body