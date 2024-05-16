import {useSelector} from "react-redux";
import styled from "styled-components";

import {getActiveChat} from "../features/chatscreen/chatScreenSlice";

import List from "./List";
import Button from "./Button";
import SwitchButton from "./SwitchButton";

import Phone from "./icons/Phone";
import MarkX from "./icons/MarkX";
import InformationCircle from "./icons/InformationCircle";
import Bell from "./icons/Bell";
import Share from "./icons/Share";
import Pencil from "./icons/Pencil";
import Trash from "./icons/Trash";
import HandRaised from "./icons/HandRaised";

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  height: 90vh;
  overflow-y: auto;

  color: var(--color-gray-800);
  background-color: var(--color-gray-200);
  border-radius: 1rem;
`;

const Header = styled.header`
  position: sticky;
  inset: 0 0 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20rem;

  background-color: white;
  padding: 1.2rem 1.8rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const Nav = styled.nav`
  display: flex;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
`;

const PrimaryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  margin-top: -1.2rem;

  background-color: white;
  padding: 1.2rem 1.8rem;
  box-shadow: 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.12);

  p {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    font-size: 1.4rem;
    font-weight: 700;

    span {
      color: var(--color-gray-500);
      font-weight: 300;
    }
  }
`;

const Img = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  padding-block: 1.8rem 0.6rem;
  box-shadow: 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.12);

  p:nth-child(3) {
    grid-column: 2/-1;
  }
`;

const PhoneInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.8rem;

  padding-left: 1.8rem;

  p {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.4rem;

    font-size: 1.4rem;
    font-weight: 400;
    color: var(--color-gray-700);

    span {
      color: var(--color-gray-500);
      font-weight: 300;
    }
  }
`;

const Bio = styled(PhoneInfo)`
  p {
    margin-left: calc(2.4rem + 2.8rem);
  }
`;

const Line = styled.div`
  // pading-left: 1.8rem
  // icon width: 2.4rem
  // gap between icon and parapraph: 2.8rem
  // 1.8rem + 2.4rem + 2.8rem = 7rem
  margin-left: 7rem;
  margin-bottom: 1.2rem;
  width: calc(100% - 7rem);
  height: 0.1rem;
  background-color: var(--color-gray-300);
`;

const Notif = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.8rem;

  background-color: white;
  padding: 1.2rem 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-200);
  }

  button {
    margin-left: auto;
  }
`;

const SendMessage = styled.button`
  display: flex;
  justify-content: flex-start;

  background: none;
  border: none;
  padding-left: 7rem;
  padding-block: 1.2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--color-blue-400);

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

const ContactOptions = styled.ul`
  display: flex;
  flex-direction: column;

  padding-block: 1.2rem;
  background-color: white;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  padding: 1.2rem 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-200);
  }

  &:last-child {
    color: var(--color-red-500);
  }
`;

function UserInfo() {
  const {profileImage, fullName, lastSeenAt, id, bio} =
    useSelector(getActiveChat);

  return (
    <StyledUserInfo>
      <Header>
        <Title>User Info</Title>

        <Nav>
          <Button>
            <Phone />
          </Button>

          <List>
            <List.Toggle />
            <List.Menu>
              <List.Item>Test Item</List.Item>
              <List.Item>Test Item</List.Item>
              <List.Item>Test Item</List.Item>
            </List.Menu>
          </List>

          <Button>
            <MarkX />
          </Button>
        </Nav>
      </Header>

      <PrimaryInfo>
        <Img src={profileImage} alt="user image" />
        <p>
          {fullName}
          <span>{lastSeenAt}</span>
        </p>
      </PrimaryInfo>

      <SecondaryInfo>
        <PhoneInfo>
          <InformationCircle />
          <p>
            @{id} <span>username</span>
          </p>
        </PhoneInfo>

        <Bio>
          <p>
            {bio} <span>Bio</span>
          </p>
        </Bio>

        <Line />

        <Notif>
          <Bell />
          <p>Notifications</p>
          <SwitchButton />
        </Notif>

        <SendMessage>Send Message</SendMessage>
      </SecondaryInfo>

      <ContactOptions>
        <ContactItem>
          <Share type="primarySmall" />
          Share contact
        </ContactItem>

        <ContactItem>
          <Pencil type="primarySmall" />
          Edit contact
        </ContactItem>

        <ContactItem>
          <Trash type="primarySmall" />
          Delete contact
        </ContactItem>

        <ContactItem>
          <HandRaised type="warningSmall" />
          Block user
        </ContactItem>
      </ContactOptions>
    </StyledUserInfo>
  );
}

export default UserInfo;
