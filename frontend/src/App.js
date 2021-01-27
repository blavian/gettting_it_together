import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import styled from "styled-components"
import Home from "./components/Home"
import Schedule from "./components/Schedule"
import Children from "./components/Children"



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  
  return (
    <Container>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path = "/" exact>
            <Home />
          </Route>
          <Route path = '/schedule'>
            <Schedule />
          </Route>
          <Route path = '/children'>
            <Children />
          </Route>
        </Switch>
      )}
    </Container>
  );
}


export default App;

const Container = styled.div`
background:#ffff;
height:100vh;
`