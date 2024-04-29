import {useSelector} from "react-redux";
import styled from "styled-components";
import {getActiveConversations, getConversations} from "./conversationsSlice";

import ConversationItem from "./ConversationItem";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 62px);

  overflow-y: auto;
`;

function ConversationsList() {
  const conversations = useSelector(getConversations);
  const activeConversation = useSelector(getActiveConversations);

  return (
    <StyledList>
      {conversations.length !== 0 &&
        conversations.map((item) => (
          <ConversationItem
            info={item}
            activeConversationId={activeConversation?.id}
            key={item.id}
          />
        ))}
    </StyledList>
  );
}

export default ConversationsList;
