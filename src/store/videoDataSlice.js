import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoData",
  initialState: {
    data: { items: [], title: "" },
    category: [],
  },
  reducers: {
    loadData(state, action) {
      state.data.items = [];
      state.data.items = action.payload;
    },
    titleSetter(state, action) {
      state.data.title = action.payload;
    },
    loadCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { loadData, loadCategory, titleSetter } = videoSlice.actions;

export default videoSlice;
