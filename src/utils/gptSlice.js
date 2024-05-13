import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,

    },
    reducers: {
        toggleGptSearhView: (state) => {
            state.showGptSearch = !state.showGptSearch;

        }
    }
})

export const {toggleGptSearhView} = gptSlice.actions

export default gptSlice.reducer;