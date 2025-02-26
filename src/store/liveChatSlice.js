import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name:"chat",
    initialState:{
        chats: []
    },
    reducers: {
        addLiveChat: (state, action) => {
            state.chats.splice(50, 1)
            state.chats.unshift(action.payload)
        }
    }
})

export const {addLiveChat} = liveChatSlice.actions;

export default liveChatSlice.reducer;