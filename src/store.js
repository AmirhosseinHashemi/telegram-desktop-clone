import {configureStore} from "@reduxjs/toolkit";
import conversationsSliceReducer from "./features/conversations/conversationsSlice";

const store = configureStore({
  reducer: {
    conversations: conversationsSliceReducer,
  },
});

export default store;
