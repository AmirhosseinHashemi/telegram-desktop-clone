import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import {addMessageToChat, getActiveChatId} from "./chatScreenSlice";
import {addMessageToConversation} from "../../slices/contactSlice";

import Microphone from "../../components/icons/Microphone";
import PaperAirplane from "../../components/icons/PaperAirplane";
import PaperClip from "../../components/icons/PaperClip";
import SmileFace from "../../components/icons/SmileFace";
import Button from "../../components/Button";

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0.4rem 1.5rem;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-left: 0.6rem;
  font-size: 1.4rem;

  &::placeholder {
    font-size: 1.3rem;
    font-weight: 300;
    color: var(--color-gray-400);
  }
`;

function ChatFooter() {
  const id = useSelector(getActiveChatId);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!message) return;

    // update contacts slice
    dispatch(addMessageToConversation({message, id}));

    // update chatScreen slice
    dispatch(addMessageToChat(message));
    setMessage("");
  }

  return (
    <Footer>
      <Form onSubmit={handleSubmit}>
        <Button>
          <PaperClip />
        </Button>

        <Input
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button>
          <SmileFace />
        </Button>

        {message ? (
          <Button>
            <PaperAirplane />
          </Button>
        ) : (
          <Button>
            <Microphone />
          </Button>
        )}
      </Form>
    </Footer>
  );
}

export default ChatFooter;
