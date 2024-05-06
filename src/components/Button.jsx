import styled, {css} from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  padding: 1rem;
  border-radius: 50%;
  transition: all 0.15s;

  ${(props) =>
    props.active
      ? css`
          background-color: var(--color-gray-100);
        `
      : css`
          background-color: transparent;
        `}

  &:active {
    background-color: var(--color-gray-100);
  }
`;

function Button({children, onClick, active}) {
  return (
    <StyledButton active={active} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
