import styled from "styled-components";
import BarsIcon from "../../components/icons/BarsIcon";

const StyledSide = styled.aside`
  flex-basis: 35%;
  background-color: #a1a1ee;
`;

const Header = styled.header`
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
    transition: all 0.3s;
    background-color: var(--color-gray-100);
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;

  border: 0.2rem solid var(--color-gray-100);
  outline: none;
  border-radius: 2rem;

  background-color: var(--color-gray-100);
  transition: background-color 0.3s;

  &:focus {
    background-color: transparent;
  }
`;

function Side() {
  return (
    <StyledSide>
      <Header>
        <Button>
          <BarsIcon />
        </Button>
        <Input placeholder="Search" />
      </Header>
    </StyledSide>
  );
}

export default Side;
