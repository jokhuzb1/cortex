import styled from "styled-components";
import Main from "./Components/Main";
import SecondPage from "./Components/SecondPage";
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom'

const Container = styled.div`
margin: 20px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
function App() {

  const [open, setOpen] = useState(false);
  return (
    <Container className="App">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/second'>
          <SecondPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
