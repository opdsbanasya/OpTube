import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video-slice",
    initialState: {
        videoList: null,
        isDescriptionShort: true
    },
    reducers: {
        addVideoes: (state, action) => {
            state.videoList = action.payload;
        },
        toggleExpandDescription: (state, action) => {
            state.isDescriptionShort = !state.isDescriptionShort;
        }
    }
})

export const { addVideoes, toggleExpandDescription } = videoSlice.actions;

export default videoSlice.reducer;