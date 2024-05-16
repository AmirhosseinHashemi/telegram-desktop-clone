import {useDispatch, useSelector} from "react-redux";
import styled, {css} from "styled-components";

import {getActiveChatId, setChatActive} from "../chatscreen/chatScreenSlice";

const StyledItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  cursor: pointer;
  padding: 1rem;
  transition: background-color 0.15s;

  &:hover {
    background-color: var(--color-gray-100);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-blue-400);
      color: var(--color-gray-100);

      span {
        color: var(--color-gray-100);
      }

      &:hover {
        background-color: var(--color-blue-400);
      }
    `}
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--color-gray-200);
`;

const Div = styled.div`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 70% 1fr;

  font-size: 1.4rem;
  line-height: 2.4rem;
`;

const Name = styled.p`
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

const Date = styled.span`
  justify-self: end;

  font-size: 1.3rem;
  font-weight: 300;
  color: var(--color-gray-400);
`;

const UnreadMessage = styled.span`
  grid-column: 2 /3;
  justify-self: end;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 0.6rem;
  background-color: var(--color-gray-400);
  border-radius: 2rem;

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: var(--color-gray-50);
`;

function ConversationItem({contact}) {
  const dispatch = useDispatch();
  const activeChatScreenId = useSelector(getActiveChatId);

  const {id, profileImage, fullName, unreadMessage, lastMessageAt} = contact;
  const isActive = id === activeChatScreenId ? true : false;

  return (
    <StyledItem
      onClick={() => dispatch(setChatActive(contact))}
      active={isActive}
    >
      <Image src={profileImage} />
      <Div>
        <Name>{fullName}</Name>
        <Date>{lastMessageAt}</Date>
        <UnreadMessage>{unreadMessage}</UnreadMessage>
      </Div>
    </StyledItem>
  );
}

export default ConversationItem;
