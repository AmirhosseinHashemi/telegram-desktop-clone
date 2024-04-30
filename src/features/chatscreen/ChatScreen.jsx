import {useState} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {getActiveConversations} from "../conversations/conversationsSlice";

import MagnifyingGlass from "../../components/icons/MagnifyingGlass";
import Phone from "../../components/icons/Phone";
import Elipsis from "../../components/icons/Elipsis";
import PaperClip from "../../components/icons/PaperClip";
import SmileFace from "../../components/icons/SmileFace";
import Microphone from "../../components/icons/Microphone";
import PaperAirplane from "../../components/icons/PaperAirplane";

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

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;
  background-color: white;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-size: 1.4rem;

  p:first-child {
    font-weight: 600;
    color: var(--color-gray-800);
    letter-spacing: 0.07rem;
  }

  p:last-child {
    font-weight: 300;
    color: var(--color-gray-500);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding: 0.2rem 1.5rem;
  background-color: white;

  form {
    flex-grow: 1;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding-left: 0.6rem;

    &::placeholder {
      font-size: 1.3rem;
      font-weight: 300;
      color: var(--color-gray-400);
    }
  }
`;

function ChatScreen() {
  const [message, setMessage] = useState("");
  const activeConversation = useSelector(getActiveConversations);

  if (activeConversation === null)
    return (
      <StyledChatScreen>
        <Label>Select a chat to start messaging</Label>
      </StyledChatScreen>
    );

  return (
    <StyledChatScreen>
      <Header>
        <Info>
          <p>{activeConversation.name}</p>
          <p>{activeConversation.lastSeenAt}</p>
        </Info>

        <Nav>
          <button>
            <MagnifyingGlass />
          </button>
          <button>
            <Phone />
          </button>
          <button>
            <Elipsis />
          </button>
        </Nav>
      </Header>

      <Footer>
        <button>
          <PaperClip />
        </button>
        <form>
          <input
            type="text"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
        <button>
          <SmileFace />
        </button>
        <button>{message ? <PaperAirplane /> : <Microphone />}</button>
      </Footer>
    </StyledChatScreen>
  );
}

export default ChatScreen;
