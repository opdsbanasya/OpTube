import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comment",
    initialState: {},
    reducers: {
        addComments: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { addComments } = commentSlice.actions;

export default commentSlice.reducer;