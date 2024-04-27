import styled from "styled-components";
import Side from "./features/sideList/Side";

const Main = styled.main`
  display: flex;
  background-color: aquamarine;
  min-height: 100vh;
`;

function App() {
  return (
    <Main>
      <Side />
    </Main>
  );
}

export default App;
