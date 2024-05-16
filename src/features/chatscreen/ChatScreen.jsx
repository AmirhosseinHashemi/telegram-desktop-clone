import {useSelector} from "react-redux";
import styled from "styled-components";

import {getActiveChat} from "./chatScreenSlice";

import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Dialogue from "./Dialogue";
import Label from "./Label";

const StyledChatScreen = styled.div`
  position: relative;
  height: 100vh;
  flex-basis: 65%;

  display: flex;
  flex-direction: column;

  background: url("/chat-background.svg"),
    linear-gradient(
        90deg,
        hsla(132, 79%, 68%, 1) 0%,
        hsla(101, 62%, 48%, 1) 100%
      )
      repeat;
`;

function ChatScreen() {
  const activeChat = useSelector(getActiveChat);

  if (activeChat === null)
    return (
      <StyledChatScreen>
        <Label>Select a chat to start messaging</Label>
      </StyledChatScreen>
    );

  return (
    <StyledChatScreen>
      <ChatHeader />
      <Dialogue />
      <ChatFooter />
    </StyledChatScreen>
  );
}

export default ChatScreen;
