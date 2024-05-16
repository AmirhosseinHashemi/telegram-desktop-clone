import {createSlice} from "@reduxjs/toolkit";
import {getFormatedTime} from "../utils/helper";

const initialState = {
  contacts: [
    {
      id: "_JoeyTri",
      fullName: "Joey Tribiani",
      profileImage: "/images/joey.jpg",
      bio: "تو تا مابشی ما شدیم انها😉",
      lastSeenAt: "last seen recently",
      lastMessageAt: "Wed",
      unreadMessage: 2,
      conversations: [
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "Hello my friend 👋",
          time: "22:15 PM",
        },
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "How is you doing ? 😈",
          time: "22:15 PM",
        },
      ],
    },

    {
      id: "mrBiiing",
      fullName: "Chandler Bing",
      profileImage: "/images/chandler.jpg",
      bio: "این نیز بگذرد...",
      lastSeenAt: "last seen yesterday at 5:20",
      lastMessageAt: "Sat",
      unreadMessage: 2,
      conversations: [
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "Hi",
          time: "22:15 PM",
        },
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "I'm Chandler. I make joke when I am uncomfortable. ",
          time: "22:15 PM",
        },
      ],
    },

    {
      id: "Moniicaaa_gel",
      fullName: "Monica Geller",
      profileImage: "/images/monica.jpg",
      bio: "Chef 👩‍🍳",
      lastSeenAt: "last seen 4 hours ago",
      lastMessageAt: "Thu",
      unreadMessage: 3,
      conversations: [
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "ooh my god",
          time: "22:15 PM",
        },
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "I am getting old and I dont have a baby yet😭",
          time: "22:15 PM",
        },
        {
          id: crypto.randomUUID(),
          from: "contact",
          content: "actually I'm not married yet 😭",
          time: "22:15 PM",
        },
      ],
    },

    {
      id: "Phiibs.bf",
      fullName: "Phoebe buffay",
      profileImage: "/images/phoebe.jpg",
      bio: "I am from galaxy 🌌",
      lastSeenAt: "last seen 1 hours ago",
      lastMessageAt: "Thu",
      unreadMessage: null,
      conversations: [],
    },

    {
      id: "_imrachel_",
      fullName: "Rachel Green",
      profileImage: "/images/rachel.jpg",
      bio: "Fashion intrested 🥻",
      lastSeenAt: "last seen recently",
      lastMessageAt: null,
      unreadMessage: null,
      conversations: [],
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addMessageToConversation(state, action) {
      const message = {
        id: crypto.randomUUID(),
        from: "you",
        content: action.payload.message,
        time: getFormatedTime(),
      };
      const contact = state.contacts.find(
        (contact) => contact.id === action.payload.id
      );
      contact.conversations.push(message);
    },
  },
});

export const {addMessageToConversation} = contactsSlice.actions;
export default contactsSlice.reducer;

// selector
export const getContactWithConversations = (state) =>
  state.contacts.contacts.filter(
    (contact) => contact.conversations.length !== 0
  );
