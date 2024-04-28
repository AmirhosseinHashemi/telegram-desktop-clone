import styled from "styled-components";
import Side from "./features/conversations/Side";
import Chat from "./features/chat/Chat";

const Main = styled.main`
  display: flex;
`;

function App() {
  return (
    <Main>
      <Side />
      <Chat />
    </Main>
  );
}

export default App;
