import { configureStore, } from "@reduxjs/toolkit";

import uiSlice from "./uiSlice.js";
import cartSlice from "./cartSlice.js";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;