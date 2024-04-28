import styled from "styled-components";
import Conversations from "./features/conversations/Conversations";
import ChatScreen from "./features/chatscreen/ChatScreen";

const Main = styled.main`
  display: flex;
`;

function App() {
  return (
    <Main>
      <Conversations />
      <ChatScreen />
    </Main>
  );
}

export default App;
