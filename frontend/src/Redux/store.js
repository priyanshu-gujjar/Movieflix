import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moiveReducer from "./moiveSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: userReducer,
    movie: moiveReducer,
     searchMovie :searchSlice
  }
});

export default store;
