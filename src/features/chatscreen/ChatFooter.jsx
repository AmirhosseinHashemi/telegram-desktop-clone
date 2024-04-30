import {useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";

import {addDialogue} from "../conversations/conversationsSlice";

import Microphone from "../../components/icons/Microphone";
import PaperAirplane from "../../components/icons/PaperAirplane";
import PaperClip from "../../components/icons/PaperClip";
import SmileFace from "../../components/icons/SmileFace";

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

function ChatFooter({activeConversation}) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!message) return;

    const data = {
      id: activeConversation.id,
      content: message,
    };

    dispatch(addDialogue(data));
    setMessage("");
  }

  return (
    <Footer>
      <button>
        <PaperClip />
      </button>

      <form onSubmit={handleSubmit}>
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

      {message ? (
        <button>
          <PaperAirplane />
        </button>
      ) : (
        <button>
          <Microphone />
        </button>
      )}
    </Footer>
  );
}

export default ChatFooter;
