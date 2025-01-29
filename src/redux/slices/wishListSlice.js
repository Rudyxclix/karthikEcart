import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addToWishList: (state, actionFromView) => {
            state.push(actionFromView.payload)
        },
        removeItem: (state, actionFromView) => {
            return state.filter(item => item.id != actionFromView.payload)
        }
    }
})

export const { addToWishList, removeItem } = wishListSlice.actions
export default wishListSlice.reducer