import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoDataSlice";

const store = configureStore({
  reducer: { videoData: videoSlice.reducer },
});

export default store;
