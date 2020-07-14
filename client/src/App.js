import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dropdown, Number, InlineContainer, Container } from '@wannabewayno/reactor';
import Saved from './pages/Saved';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search/>
        </Route>
        <Route exact path="/saved">
          <Saved/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
