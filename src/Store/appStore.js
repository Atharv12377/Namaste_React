import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./Slices/cartSlice.js"
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    } 
})
export default appStore;
