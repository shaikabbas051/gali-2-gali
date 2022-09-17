import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleWare } from "../ApiMiddleware";
import homeReducer from "./Home";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: [apiMiddleWare],
});
export default store;
