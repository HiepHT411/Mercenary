import {createSlice} from "@reduxjs/toolkit"
export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [{slug: "âsdas", name: "qưoewoqei", weight: 3, quantity: 10}],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct: (state,action)=>{
            state.quantity += action.payload.quantity
            state.products = [...state.products, action.payload]
            state.total += action.payload.weight *10*action.payload.quantity;
        },
        removeProduct :(state,action)=>{
            
        }
    }
});

export const {
    addProduct, removeProduct
} = cartSlice.actions;
export default cartSlice.reducer;