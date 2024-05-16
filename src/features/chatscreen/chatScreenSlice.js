import {createSlice} from "@reduxjs/toolkit";
import {getFormatedTime} from "../../utils/helper";

const initialState = {
  activeChat: null, // null or contact object
};

const chatScreenSlice = createSlice({
  name: "chatScreen",
  initialState,
  reducers: {
    setChatActive(state, action) {
      state.activeChat = action.payload; // action.payload must be a contact object
    },
    addMessageToChat(state, action) {
      const message = {
        id: crypto.randomUUID(),
        from: "you",
        content: action.payload,
        time: getFormatedTime(),
      };
      state.activeChat.conversations.push(message);
    },
  },
});

export const {setChatActive, addMessageToChat} = chatScreenSlice.actions;
export default chatScreenSlice.reducer;

// selector
export const getActiveChat = (state) => state.chatScreen.activeChat;
export const getActiveChatId = (state) => state.chatScreen.activeChat?.id;
