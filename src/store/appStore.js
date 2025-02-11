import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice"

const appStore = configureStore({
    reducer:{
        videoes: videoReducer,
    }
})

export default appStore;