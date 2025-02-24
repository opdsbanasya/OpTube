import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchSuggetion: {},
        searchData: {},
    },
    reducers: {
        cacheSuggestions: (state, action) => {
            state.searchSuggetion = Object.assign(state.searchSuggetion, action.payload);
        },
        addSearchData: (state, action) => {
            state.searchData = Object.assign(state.searchData, action.payload);
        }

    }
})

export const { cacheSuggestions, addSearchData } = searchSlice.actions;

export default searchSlice.reducer;