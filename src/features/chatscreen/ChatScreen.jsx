import {useSelector} from "react-redux";
import styled from "styled-components";

import {getActiveConversations} from "../conversations/conversationsSlice";

import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";

const StyledChatScreen = styled.div`
  position: relative;
  flex-basis: 65%;

  background: url("/chat-background.svg"),
    linear-gradient(
        90deg,
        hsla(132, 79%, 68%, 1) 0%,
        hsla(101, 62%, 48%, 1) 100%
      )
      repeat;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    padding: 0.8rem;
    border-radius: 2rem;
  }

  button:active {
    transition: all 0.15s;
    background-color: var(--color-gray-100);
  }
`;

const Label = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 1.2rem;
  color: var(--color-gray-50);
  letter-spacing: 0.1rem;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.5rem 0.9rem;
  border-radius: 2rem;
`;

function ChatScreen() {
  const activeConversation = useSelector(getActiveConversations);

  if (activeConversation === null)
    return (
      <StyledChatScreen>
        <Label>Select a chat to start messaging</Label>
      </StyledChatScreen>
    );

  return (
    <StyledChatScreen>
      <ChatHeader activeConversation={activeConversation} />
      <ChatFooter />
    </StyledChatScreen>
  );
}

export default ChatScreen;
