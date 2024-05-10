import styled, {css} from "styled-components";

const StyledSwitchButton = styled.button`
  position: relative;
  border: none;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 1rem;

  span {
    position: absolute;
    top: 50%;

    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    background-color: white;
    border: 0.2rem solid var(--color-gray-400);
    border-radius: 50%;
    transition: all 0.3s;
  }

  ${(props) =>
    !props.active &&
    css`
      background-color: var(--color-gray-400);
      span {
        left: 0;
        transform: translate(-25%, -50%);
      }
    `}

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-blue-400);
      span {
        right: 0;
        transform: translate(25%, -50%);
      }
    `}
`;

function SwitchButton({active = false}) {
  return (
    <StyledSwitchButton active={active}>
      <span></span>
    </StyledSwitchButton>
  );
}

export default SwitchButton;
