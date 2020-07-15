import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Dropdown, Number, InlineContainer, Container } from '@wannabewayno/reactor';
import Header from './components/Header';
import Saved from './pages/Saved';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import library from './library.jpg';
import bookshelf from './bookshelf.jpg'

function App() {

  const [ location, setLocation ] = useState(window.location.pathname);

  function getBackgroundImage(){
    switch(location){
      case'/': return library
      case'/search': return library
      case'/saved': return bookshelf
      default: return 'nothing'
    }
  }

  const pageStyle = {
    marginTop:'0',
     height:'100vh',
     paddingTop:'80px',
     backgroundImage:`url(${getBackgroundImage()})`,
     backgroundSize:'cover',
     backgroundPosition:'center',
     backgroundAttachment:'fixed'
 }


 console.log(location);

  return (
    <Router>
        <main style={pageStyle}>
          <Header/>
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
        </main>
    </Router>
  );
}


export default App;
