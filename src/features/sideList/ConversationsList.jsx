import styled from "styled-components";
import ConversationItem from "./ConversationItem";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 62px);

  overflow-y: auto;
`;

function ConversationsList() {
  return (
    <StyledList>
      <ConversationItem />
    </StyledList>
  );
}

export default ConversationsList;
