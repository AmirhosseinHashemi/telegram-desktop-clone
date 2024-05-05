import styled, {css} from "styled-components";

const Icon = styled.svg`
  ${(props) =>
    props.type === "primary" &&
    css`
      width: 2.4rem;
      height: 2.4rem;
      stroke: var(--color-gray-800);
    `}

  ${(props) =>
    props.type === "primarySmall" &&
    css`
      width: 1.8rem;
      height: 1.8rem;
      stroke: var(--color-gray-800);
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      width: 2.4rem;
      height: 2.4rem;
      stroke: var(--color-gray-400);
    `}

  ${(props) =>
    props.type === "secondarySmall" &&
    css`
      width: 1.8rem;
      height: 1.8rem;
      stroke: var(--color-gray-400);
    `}

    ${(props) =>
    props.type === "send" &&
    css`
      width: 2.4rem;
      height: 2.4rem;
      fill: var(--color-blue-400);
    `}
`;

Icon.defaultProps = {
  type: "primary",
};

export default Icon;
