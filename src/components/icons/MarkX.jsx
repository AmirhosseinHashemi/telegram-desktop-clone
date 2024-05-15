import Icon from "./Icon";

function MarkX({type = "secondary"}) {
  return (
    <Icon
      type={type}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </Icon>
  );
}

export default MarkX;
