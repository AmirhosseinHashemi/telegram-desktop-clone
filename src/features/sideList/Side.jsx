import styled from "styled-components";
import BarsIcon from "../../components/icons/BarsIcon";

const StyledSide = styled.aside`
  flex-basis: 35%;
  border-right: 1px solid var(--color-gray-200);
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

  background-color: var(--color-gray-100);
  transition: background-color 0.15s;

  &:focus {
    background-color: transparent;
  }

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.08rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 62px);

  overflow-y: auto;
`;

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  cursor: pointer;
  padding: 1rem;
  transition: background-color 0.15s;

  &:hover {
    background-color: var(--color-gray-100);
  }

  &:active {
    background-color: var(--color-blue-400);
  }
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

function Side() {
  return (
    <StyledSide>
      <Header>
        <Button>
          <BarsIcon />
        </Button>
        <Input placeholder="Search" />
      </Header>

      <List>
        <Item>
          <Image src="/images/profile.png" />
          <Div>
            <Name>Amirhossein Hashemi</Name>
            <Date>5:30 AM</Date>
            <UnreadMessage>1</UnreadMessage>
          </Div>
        </Item>
      </List>
    </StyledSide>
  );
}

export default Side;
