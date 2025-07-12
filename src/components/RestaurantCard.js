import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({ resData }) => {
    const {name, cloudinaryImageId, cuisines, avgRating } = resData?.info 
    return (
        <div className="res-card">
            <img src= {CDN_URL + cloudinaryImageId}  alt="" className="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating }</h4>
            <h4>38 minutes</h4>
            
            
        </div>

    )
}

export default RestaurantCard