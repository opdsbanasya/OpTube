import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        isSidebarDisplay: true,
    },
    reducers: {
        toggleSidebar: (state, action) => {
            state.isSidebarDisplay = !state.isSidebarDisplay;
        },
        hideSidebar: (state, action) => {
            state.isSidebarDisplay = false;
        },
    }
})

export const { toggleSidebar, hideSidebar } = headerSlice.actions;

export default headerSlice.reducer;