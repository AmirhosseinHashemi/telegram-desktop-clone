import {useSelector} from "react-redux";
import styled from "styled-components";

import {getContactWithConversations} from "../../slices/contactSlice";

import ConversationItem from "./ConversationItem";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 62px);

  overflow-y: auto;
`;

function ConversationsList() {
  const conversations = useSelector(getContactWithConversations);

  return (
    <StyledList>
      {conversations.length !== 0 &&
        conversations.map((contact) => (
          <ConversationItem contact={contact} key={contact.id} />
        ))}
    </StyledList>
  );
}

export default ConversationsList;
