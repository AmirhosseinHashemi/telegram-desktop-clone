import {useSelector} from "react-redux";
import styled from "styled-components";

import {getActiveConversations} from "../conversations/conversationsSlice";

import MagnifyingGlass from "../../components/icons/MagnifyingGlass";
import Phone from "../../components/icons/Phone";
import Elipsis from "../../components/icons/Elipsis";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

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

function ChatHeader() {
  const {name, lastSeenAt} = useSelector(getActiveConversations);

  return (
    <Header>
      <Info>
        <p>{name}</p>
        <p>{lastSeenAt}</p>
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
  );
}

export default ChatHeader;
