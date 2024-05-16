import {configureStore} from "@reduxjs/toolkit";
import contactsSliceReducer from "./slices/contactSlice";
import chatScreenSliceReducer from "./features/chatscreen/chatScreenSlice";

const store = configureStore({
  reducer: {
    chatScreen: chatScreenSliceReducer,
    contacts: contactsSliceReducer,
  },
});

export default store;
