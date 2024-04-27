import styled, {css} from "styled-components";

const Icon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;

  ${(props) =>
    props.type === "primary" &&
    css`
      stroke: var(--color-gray-800);
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      stroke: var(--color-gray-600);
    `}
`;

export default Icon;
