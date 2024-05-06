import styled from "styled-components";
import {useEffect, useRef, useState} from "react";

import Elipsis from "./icons/Elipsis";
import SpeakerXMark from "./icons/SpeakerXMark";
import UserCircle from "./icons/UserCircle";
import Trash from "./icons/Trash";
import Backspace from "./icons/Backspace";

const StyledList = styled.div`
  position: relative;
`;

const Ul = styled.ul`
  position: absolute;
  top: 100%;
  right: 50%;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0.8rem 0;
  background-color: white;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  width: 24rem;

  font-size: 1.4rem;
  font-weight: 400;
  text-align: left;
  color: var(--color-gray-800);

  cursor: pointer;
  padding: 0.8rem 2rem;

  &:hover {
    background-color: var(--color-gray-100);
  }
`;

function List() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(function () {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };

    document.documentElement.addEventListener("click", handleClick);

    return () => {
      document.documentElement.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <StyledList ref={ref}>
      <button onClick={() => setIsOpen((bool) => !bool)}>
        <Elipsis />
      </button>

      {isOpen && (
        <Ul>
          <Li>
            <SpeakerXMark /> Mute notifications
          </Li>
          <Li>
            <UserCircle /> View profile
          </Li>
          <Li>
            <Backspace /> Clear history
          </Li>
          <Li>
            <Trash /> Delete chat
          </Li>
        </Ul>
      )}
    </StyledList>
  );
}

export default List;
