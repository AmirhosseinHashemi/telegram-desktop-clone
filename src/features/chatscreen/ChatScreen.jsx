import styled from "styled-components";

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
  return (
    <StyledChatScreen>
      <Label>Select a chat to start messaging</Label>
    </StyledChatScreen>
  );
}

export default ChatScreen;
