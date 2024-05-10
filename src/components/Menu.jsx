import {createPortal} from "react-dom";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

import ChevDown from "./icons/ChevDown";
import UserGroup from "./icons/UserGroup";
import SpeakerWaves from "./icons/SpeakerWaves";
import UserCircle from "./icons/UserCircle";
import Phone from "./icons/Phone";
import Bookmark from "./icons/Bookmark";
import Cog6Tooth from "./icons/Cog6Tooth";
import Moon from "./icons/Moon";
import SwitchButton from "./SwitchButton";

const Overlay = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  font-family: "Roboto", "Vazirmatn", sans-serif;
  font-size: 1.4rem;
`;

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 20%;
  background-color: white;
  animation: open 0.3s;

  @keyframes open {
    from {
      width: 0;
    }
    to {
      width: 20%;
    }
  }
`;

const Header = styled.header`
  padding: 2.4rem 2rem;
  border-bottom: 0.1rem solid var(--color-gray-200);
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--color-gray-200);
  margin-bottom: 2rem;
`;

const FullName = styled.p`
  font-weight: 500;
  color: var(--color-gray-800);
`;

const EmojiStatus = styled.p`
  grid-column: 1 / 2;

  font-weight: 300;
  text-transform: capitalize;
  color: var(--color-blue-400);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
  row-gap: 0.4rem;
`;

const Button = styled.button`
  grid-row: 1 / 3;
  grid-column: 2 / 3;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: transparent;
  border: none;
`;

const Nav = styled.nav`
  padding-top: 0.6rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;

  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;

  cursor: pointer;
  padding: 1.2rem 2rem;

  button {
    margin-left: auto;
  }

  &:hover {
    background-color: var(--color-gray-100);
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 0 2rem 2rem 2rem;

  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--color-gray-400);
  }

  p:last-child {
    font-size: 1.3rem;
    font-weight: 300;
    color: var(--color-gray-400);
    margin-top: 0.3rem;
  }
`;

function Menu({closeMenu}) {
  const ref = useOutsideClick(closeMenu);

  return createPortal(
    <Overlay>
      <StyledMenu ref={ref}>
        <Header>
          <Image src="/images/profile.png" />
          <Div>
            <FullName>Amirhossein Hashemi</FullName>
            <EmojiStatus>Set Emoji Status</EmojiStatus>
            <Button>
              <ChevDown type="secondarySmall" />
            </Button>
          </Div>
        </Header>

        <Nav>
          <Ul>
            <Li>
              <UserGroup type="primarySmall" /> New Group
            </Li>
            <Li>
              <SpeakerWaves type="primarySmall" /> New Channel
            </Li>
            <Li>
              <UserCircle type="primarySmall" /> Contacts
            </Li>
            <Li>
              <Phone type="primarySmall" /> Calls
            </Li>
            <Li>
              <Bookmark type="primarySmall" /> Saved Message
            </Li>
            <Li>
              <Cog6Tooth type="primarySmall" /> Setting
            </Li>
            <Li>
              <Moon type="primarySmall" /> Night Mode
              <SwitchButton></SwitchButton>
            </Li>
          </Ul>
        </Nav>

        <Footer>
          <p>Telegram Desktop Clone</p>
          <p>Version 5.0.1 x64-About</p>
        </Footer>
      </StyledMenu>
    </Overlay>,
    document.documentElement
  );
}

export default Menu;
