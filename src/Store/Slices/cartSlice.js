import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name: 'cart', 
    initialState: {
        item: ["Burger", "Pizza", "daal"]
    },
    reducers: {
        addItem: (state, action)=>{
            //We are mutating the state over here.
            state.item.push(action.payload)
        },
         removeItem: (state, action)=>{
            state.item.pop()
        },
        clearCart: (state)=>{
            state.item.length = 0;
        }
    }
})
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;