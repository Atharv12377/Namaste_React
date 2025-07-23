import ItemDetails from "./ItemDetails"
import { useState } from "react"
const RestaurantCategory = ({categories}) => {
    console.log(categories)
    const [showlistByCategory, setshowlistByCategory] = useState(null)
    const showOnClick = (categoryId) =>{
      setshowlistByCategory(prev => prev === categoryId ? null : categoryId)
    }
  return (

    <div className='w-6x'>
        {categories.map((c)=>{
          const categoryId = c?.card?.card?.categoryId
          //NEVER USE SETStATE inside render, its a side effect, and will cause infinite render loop. 
          const isopen = showlistByCategory === categoryId
       return (
       <div key={c?.card?.card?.categoryId} className="border-2 w-6/12 border-gray-100 mx-auto my-4 p-4 shadow-2xl">
         <div className=' flex justify-between items-center mb-3 cursor-pointer' onClick={()=>{showOnClick(categoryId)}} >
            <span>{c.card.card.title} </span>
            <span><button >🔽</button></span>
         </div>
         <div>
          {isopen && <ItemDetails itemdata = {c.card.card.itemCards}/> }
         </div>
        
        
       </div> 
      )
    })}
    
   
    
    </div>

  )
}
export default RestaurantCategory