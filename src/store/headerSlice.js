import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        isSidebarDisplay: true,
    },
    reducers: {
        hideSidebar: (state, action) => {
            state.isSidebarDisplay = !state.isSidebarDisplay;
        }
    }
})

export const { hideSidebar } = headerSlice.actions;

export default headerSlice.reducer;