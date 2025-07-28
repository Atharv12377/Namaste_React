import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name: 'cart', 
    initialState: {
        item: [],
        id: null, 
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
        },
        setID: (state,action)=>{
            state.id = action.payload
        }
    }
})
export const {addItem, removeItem, clearCart, setID} = cartSlice.actions;
export default cartSlice.reducer;