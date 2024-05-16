import {useState} from "react";
import styled from "styled-components";

import BarsIcon from "../../components/icons/BarsIcon";
import Menu from "../../components/Menu";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  padding: 0.8rem 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  outline: none;

  padding: 1rem;
  border-radius: 50%;

  &:active {
    transition: all 0.15s;
    background-color: var(--color-gray-100);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1.5rem;

  border: 0.2rem solid var(--color-gray-100);
  outline: none;
  border-radius: 2rem;
  font-size: 1.2rem;

  background-color: var(--color-gray-100);
  transition: background-color 0.15s;

  &:focus {
    background-color: transparent;
  }

  &::placeholder {
    font-weight: 300;
    letter-spacing: 0.08rem;
  }
`;

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      {isOpenMenu && <Menu closeMenu={() => setIsOpenMenu(false)} />}
      <StyledHeader>
        <Button onClick={() => setIsOpenMenu((bool) => !bool)}>
          <BarsIcon />
        </Button>
        <Input placeholder="Search" />
      </StyledHeader>
    </>
  );
}

export default Header;
