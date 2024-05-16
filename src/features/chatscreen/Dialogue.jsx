import {useSelector} from "react-redux";
import styled from "styled-components";

import {getActiveChat} from "./chatScreenSlice";

import Message from "./Message";
import Label from "./Label";

const StyledDialogue = styled.div`
  position: relative;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  overflow-y: auto;
  margin-bottom: 4.5rem;
  padding: 1rem 1.5rem;
`;

function Dialogue() {
  const {conversations} = useSelector(getActiveChat);

  if (conversations.length === 0)
    return (
      <StyledDialogue>
        <Label>No message here yet</Label>
      </StyledDialogue>
    );

  return (
    <StyledDialogue>
      {conversations.map((item) => (
        <Message key={item.id} data={item}></Message>
      ))}
    </StyledDialogue>
  );
}

export default Dialogue;
