import Icon from "./Icon";

function ChevRight({type = "secondary"}) {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </Icon>
  );
}

export default ChevRight;
