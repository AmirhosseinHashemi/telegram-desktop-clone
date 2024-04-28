import styled from "styled-components";
import Header from "./Header";
import ConversationsList from "./ConversationsList";

const StyledConversations = styled.aside`
  flex-basis: 35%;
  border-right: 1px solid var(--color-gray-200);
`;

function Conversations() {
  return (
    <StyledConversations>
      <Header />
      <ConversationsList />
    </StyledConversations>
  );
}

export default Conversations;
