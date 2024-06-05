import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showCart: false,
    notification: null
}
const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toogleCart(state) {
            state.showCart = !state.showCart
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        }
    }
})

export const uiSliceActions = uiSlice.actions;

export default uiSlice