import { createSlice } from "@reduxjs/toolkit";

const postSlices = createSlice({
  name: "postSlices",
  initialState: {
    posts: [],
  },

  reducers: {
    fetchItems: (state, action) => {
      state.posts = (action.payload);
    },
  },
});


export const {fetchItems} = postSlices.actions;
export default postSlices.reducer;
