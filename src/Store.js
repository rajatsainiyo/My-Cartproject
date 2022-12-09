import { configureStore } from "@reduxjs/toolkit";
// import Home from "./Cart-project/Card-components/Home";
import Cart_item from "./Cart-project/Redux-component/Cartitems"

const store = configureStore({
    reducer:{
        Cart_item:Cart_item
    }
})
export default store;
