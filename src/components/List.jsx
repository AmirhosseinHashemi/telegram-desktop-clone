import styled from "styled-components";
import {createContext, useContext, useState} from "react";
import useOutsideClick from "../hooks/useOutsideClick";

import Elipsis from "./icons/Elipsis";
import Button from "./Button";
import ChevRight from "./icons/ChevRight";

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
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;
  width: 24rem;

  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-800);

  cursor: pointer;
  padding: 0.8rem 2rem;

  ul {
    visibility: hidden;
    opacity: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  &:hover {
    background-color: var(--color-gray-100);
  }

  &:hover ul {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledSubMenu = styled(Ul)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateX(-98%);
  transition: all 0.15s;
`;

const ListContext = createContext();

function List({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const handleOpen = () => setIsOpen((bool) => !bool);

  return (
    <ListContext.Provider value={{isOpen, handleOpen}}>
      <StyledList ref={ref}>{children}</StyledList>
    </ListContext.Provider>
  );
}

function Toggle({icon = <Elipsis />}) {
  const {isOpen, handleOpen} = useContext(ListContext);

  return (
    <Button active={isOpen} onClick={handleOpen}>
      {icon}
    </Button>
  );
}

function Menu({children}) {
  const {isOpen} = useContext(ListContext);

  return isOpen ? <Ul>{children}</Ul> : null;
}

function Item({children, icon = null, onClick, showSubMenuIcon}) {
  return (
    <Li onClick={onClick}>
      {icon}
      {children}
      {showSubMenuIcon && (
        <span>
          <ChevRight type="secondarySmall" />
        </span>
      )}
    </Li>
  );
}

function SubMenu({children}) {
  return <StyledSubMenu>{children}</StyledSubMenu>;
}

List.Toggle = Toggle;
List.Menu = Menu;
List.Item = Item;
List.SubMenu = SubMenu;

export default List;
