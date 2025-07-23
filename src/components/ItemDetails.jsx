const ItemDetails = ({itemdata}) =>{
    console.log(itemdata)
    return(
        <div className="w-full  p-5">
           {itemdata.map((items)=>{
            return(
                <div key={items.card.info.id} className=" m-4 flex justify-between p-3 bg-gray-100 shadow-xl border-b-2 border-b-gray-300">
                   <span className="">{items.card.info.name}</span> 
                   <span>{items.card.info.price/100} Rs</span>
                </div>
            )
            
           })}
        </div>
    )

}
export default ItemDetails