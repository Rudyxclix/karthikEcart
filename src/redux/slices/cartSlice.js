import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, actionFromComponent) => {
            const existingProduct = state.find(item => item.id == actionFromComponent.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item => item.id != existingProduct.id)
                state = [...remainingProducts, existingProduct]

            } else {
                state.push({ ...actionFromComponent.payload, quantity: 1, totalPrice: actionFromComponent.payload.price })
            }
        },
        increamentQuantity: (state, actionFromCart) => {
            const existingProduct = state.find(item => item.id == actionFromCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProducts, existingProduct]
        },
        removeCartItem: (state, actionByCart) => {
            return state.filter(item => item?.id != actionByCart.payload)
        },
        decreamentQuantity: (state, actionByCart) => {
            const existingProduct = state.find(item => item.id == actionByCart.payload.id)
            if (existingProduct?.quantity > 1) {
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item => item.id != existingProduct.id)
                state = [...remainingProducts, existingProduct]
            }
            else{
                return state.filter(item => item?.id != actionByCart.payload.id)
            }
        },
        emptyCart:() => []
    }
})

export const { addToCart, increamentQuantity, removeCartItem, decreamentQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer