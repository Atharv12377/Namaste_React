import React, { useEffect, useState } from 'react'
import { RES_MENU_API } from './constants'

function useRestaurantMenu(resid) {
    const [resInfo, setresInfo] = useState(null)
    useEffect(()=>{
        fetchResData();
    },[])

     const fetchResData = async() =>{
          const resData = await fetch(RES_MENU_API + resid)
        const JsonResData = await resData.json();
        console.log(JsonResData);
        const restaurantdata = JsonResData.data
        // .cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
        setresInfo(restaurantdata)
    }

  return resInfo
}

export default useRestaurantMenu