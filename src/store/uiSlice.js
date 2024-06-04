import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showCart: false
}
const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toogleCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const uiSliceActions = uiSlice.actions;

export default uiSlice