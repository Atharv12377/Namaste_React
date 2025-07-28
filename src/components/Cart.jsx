import { useDispatch, useSelector } from "react-redux"
import { clearCart} from "../Store/Slices/cartSlice.js"
import ItemDetails from "./ItemDetails"

const Cart = () =>{
    const cartItemList = useSelector((store)=>{
         return store.cart.item
    })
    const itemID = useSelector((store)=>{
        return store.cart.id
    })
    console.log(cartItemList)
    const dispatch = useDispatch()
    const clearCartfxn = () =>{
        dispatch(clearCart())
    }
    return(
        <div className="m-10 border-2 border-gray-50 p-5">
            <div className="text-5xl"> CART </div>
            <button className="p-2 m-4 h-14 w-auto rounded-2xl bg-amber-400" onClick={clearCartfxn}>CLEAR CART</button>
            <div className="border-2 border-amber-200 mt-4 p-3">
                <ItemDetails itemdata={cartItemList}/>
                
            </div>
        </div>
    )
}

export default Cart