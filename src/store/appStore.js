import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import headerReducer from "./headerSlice";
import searchReducer from "./searchSlice";
import commentReducer from "./commentSlice";
import liveChatReducer from "./liveChatSlice";

const appStore = configureStore({
    reducer:{
        videoes: videoReducer,
        header: headerReducer,
        search: searchReducer,
        comment: commentReducer,
        chat: liveChatReducer
    }
})

export default appStore;