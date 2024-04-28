import styled from "styled-components";
import Side from "./features/sideList/Side";

const Main = styled.main`
  display: flex;
`;

function App() {
  return (
    <Main>
      <Side />
    </Main>
  );
}

export default App;
