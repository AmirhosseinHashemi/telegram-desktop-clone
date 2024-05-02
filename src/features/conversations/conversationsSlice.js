import {createSlice} from "@reduxjs/toolkit";
import {getFormatedTime} from "../../utils/helper";

const initialState = {
  conversations: [
    {
      id: "AmirhosseinHashemi8",
      name: "Amirhossein Hashemi",
      image: "/images/profile.png",
      lastSeenAt: "last seen recently",
      lastMessageAt: "Wed",
      unreadMessage: 5,
      dialogue: [
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "Hello 👋",
          time: "22:15 PM",
        },
        {
          id: crypto.randomUUID(),
          from: "contact",
          content:
            "I am a junior frontend developer with more than a year experience.",
          time: "22:15 PM",
        },
      ],
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
    addDialogue(state, action) {
      const data = {
        index: crypto.randomUUID(),
        from: "you",
        content: action.payload.content,
        time: getFormatedTime(),
      };
      state.activeConversation.dialogue.push(data);
    },
  },
});

export const {
  addConversation,
  deleteConversation,
  setConversationActive,
  addDialogue,
} = conversationSlice.actions;

export default conversationSlice.reducer;

// select functions
export const getConversations = (state) => state.conversations.conversations;

export const getActiveConversations = (state) =>
  state.conversations.activeConversation;
