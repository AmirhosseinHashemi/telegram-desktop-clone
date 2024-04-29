import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  conversations: [
    {
      id: "AmirhosseinHashemi8",
      name: "Amirhossein Hashemi",
      image: "/images/profile.png",
      lastSeenAt: "last seen recently",
      lastMessageAt: "Wed",
      unreadMessage: 5,
    },
  ],
  activeConversation: null,
};

const conversationSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addConversation(state, action) {
      state.conversations.push(action.payload);
    },
    deleteConversation(state, action) {
      state.conversations.filter((item) => item.id !== action.payload);
    },
    setConversationActive(state, action) {
      state.activeConversation = state.conversations.find(
        (item) => item.id === action.payload
      );
    },
  },
});

export const {addConversation, deleteConversation, setConversationActive} =
  conversationSlice.actions;

export default conversationSlice.reducer;

// select functions
export const getConversations = (state) => state.conversations.conversations;

export const getActiveConversations = (state) =>
  state.conversations.activeConversation;
