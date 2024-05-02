export function getFormatedTime() {
  return new Intl.DateTimeFormat("en", {
    timeStyle: "short",
  }).format(Date.now());
}
