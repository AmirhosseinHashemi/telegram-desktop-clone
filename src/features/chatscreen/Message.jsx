import styled, {css} from "styled-components";

const StyledMessage = styled.p`
  position: relative;

  display: flex;
  flex-direction: column;

  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-800);
  line-height: 2rem;

  max-width: 50%;
  padding: 0.6rem 1.2rem;

  span {
    align-self: flex-end;

    color: var(--color-gray-400);
    font-size: 1.1rem;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 0;

    width: 1rem;
    height: 1rem;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  ${(props) =>
    props.from === "you" &&
    css`
      align-self: flex-end;
      border-radius: 2rem 2rem 0 2rem;
      background-color: var(--color-emerald-100);

      &::after {
        right: 0;
        transform: translateX(50%);
        background-color: var(--color-emerald-100);
      }
    `}

  ${(props) =>
    props.from === "contact" &&
    css`
      align-self: flex-start;
      border-radius: 2rem 2rem 2rem 0;
      background-color: white;

      &::after {
        left: 0;
        transform: translateX(-50%);
        background-color: white;
      }
    `}
`;

function Message({data}) {
  const {from, content, time} = data;

  return (
    <StyledMessage from={from}>
      {content}
      <span>{time}</span>
    </StyledMessage>
  );
}

export default Message;
