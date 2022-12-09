import { createSlice } from "@reduxjs/toolkit";
import { product_Data } from "../Cart-product-data/Apidata";
const initialstate = {

    cartarry: [],
totalitem:0,
totalamount:0,



}
const Cart_item = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducers: {
        add_cart: (state, action) => {
            const itemindex = state.cartarry.findIndex((item) => item.id === action.payload.id);
            console.log(itemindex, 'itemindex');
            if (itemindex >= 0) {
                state.cartarry[itemindex].quantity += 1
            } else {

                const tempProduct = { ...action.payload, quantity: 1 };
                state.cartarry.push(tempProduct)
                state.total = state.total + +product_Data.price;
            }
        },

        reset_cart: (state, action) => {
            state.cartarry = [];
            state.total = 0;


        },
        increment: (state, action) => {
            const mydata = state.cartarry.find((item) => item.id === action.payload.id);
            mydata.quantity++;

        },

        decrement: (state, action) => {
            const mynewdata = state.cartarry.find((item) => item.id === action.payload.id);
            if (mynewdata === 1) {
                mynewdata.quantity = 1
            } else {
                if (mynewdata.quantity>1) {
                    
                    mynewdata.quantity--;
                    
                }
            }
        },
        remove: (state, action) => {
            const removeitem = state.cartarry.filter((item) =>
                item.id !== action.payload.id);
            state.cartarry = removeitem;
        },

        subtotal:(state,action)=>{

let newur =  state.cartarry.reduce((acc,item)=> acc+item.quantity*item.price,0)
console.log(newur,'data');

        //   let {totalitem,totalamount}= state.cartarry.reduce((accum,curval)=>{

        //     let{price,quantity} = curval;
        //     let totalprice = price*quantity;
        //     accum.totalamount+=totalprice;
        //     accum.totalitem+=quantity;
        //     return accum;
        //   },
          
        //   {
        //       totalitem:0,


        //   });
        //   return{...state,totalitem,totalamount}
            
        }

    }

})
export const { add_cart, incre_quantity, reset_cart, increment, decrement, remove,subtotal } = Cart_item.actions;
export default Cart_item.reducer;