import {useSelector} from "react-redux";
import styled, {css} from "styled-components";

import {getActiveConversations} from "../conversations/conversationsSlice";

import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";

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

const Dialogue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  overflow-y: auto;
  margin-bottom: 4.5rem;
  padding: 1rem 1.5rem;
`;

const Message = styled.p`
  display: flex;
  flex-direction: column;

  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-800);
  line-height: 2rem;

  max-width: 50%;
  padding: 0.6rem 1.2rem;

  span {
    align-self: flex-end;

    color: var(--color-gray-400);
    font-size: 1.1rem;
  }

  ${(props) =>
    props.from === "you" &&
    css`
      align-self: flex-end;
      border-radius: 2rem 2rem 0 2rem;
      background-color: var(--color-emerald-100);
    `}

  ${(props) =>
    props.from === "contact" &&
    css`
      align-self: flex-start;
      border-radius: 2rem 2rem 2rem 0;
      background-color: white;
    `}
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
      <Dialogue>
        {activeConversation.dialogue.map((item) => (
          <Message key={item.index} from={item.from}>
            {item.content} <span>{item.time}</span>
          </Message>
        ))}
      </Dialogue>
      <ChatFooter activeConversation={activeConversation} />
    </StyledChatScreen>
  );
}

export default ChatScreen;
