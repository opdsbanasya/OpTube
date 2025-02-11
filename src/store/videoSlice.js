import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video-slice",
    initialState: {
        videoList: null,
    },
    reducers: {
        addVideoes: (state, action) => {
            state.videoList = action.payload;
        }
    }
})

export const {addVideoes} = videoSlice.actions;

export default videoSlice.reducer;