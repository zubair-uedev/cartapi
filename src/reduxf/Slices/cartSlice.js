import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        cart: []
    },
    reducers:{
        addTocart: (state,action)=>{
            const cartItem = state.cart.find(item =>item.id == action.payload)
            if(cartItem){
                cartItem.quantity += 1;
                return;
            }
            state.cart.push({
                quantity:1,
                id: action.payload
            })
        },
        removeFromCart:(state,action)=>{
            const cartItem = state.cart.find(item =>item.id == action.payload)
            if(cartItem){
                cartItem.quantity -= 1;
                if(cartItem.quantity == 0){
                    state.cart = state.cart.filter(item =>item.id !== action.payload)
                }
            }
        }
    }
})

export const {addTocart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
