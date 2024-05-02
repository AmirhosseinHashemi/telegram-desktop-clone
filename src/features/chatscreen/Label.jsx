import styled from "styled-components";

const StyledLabel = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 1.2rem;
  color: var(--color-gray-50);
  letter-spacing: 0.1rem;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.5rem 0.9rem;
  border-radius: 2rem;
`;

function Label({children}) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;
