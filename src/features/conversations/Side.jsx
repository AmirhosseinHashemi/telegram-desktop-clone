import styled from "styled-components";
import Header from "./Header";
import ConversationsList from "./ConversationsList";

const StyledSide = styled.aside`
  flex-basis: 35%;
  border-right: 1px solid var(--color-gray-200);
`;

function Side() {
  return (
    <StyledSide>
      <Header />
      <ConversationsList />
    </StyledSide>
  );
}

export default Side;
