import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import headerReducer from "./headerSlice";

const appStore = configureStore({
    reducer:{
        videoes: videoReducer,
        header: headerReducer
    }
})

export default appStore;