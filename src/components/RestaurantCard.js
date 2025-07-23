import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({ resData }) => {
    const {name, cloudinaryImageId, cuisines, avgRating } = resData?.info 
    return (
        <div className="w-[30vw] border-4 border-orange-400 m-4 h-auto shadow-2xl p-4">
            <img src= {CDN_URL + cloudinaryImageId}  alt="" className="w-full h-72" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating }</h4>
            <h4>38 minutes</h4>
            
            
        </div>

    )
}

export const RestaurantsWithAreaName = (RestaurantCard)=>{
    return (props)=>{
        const {resData} = props 
      return(  <div>
            Area name : {resData.info.areaName}
            <RestaurantCard {...props} />
        </div>)
    }
}
export default RestaurantCard