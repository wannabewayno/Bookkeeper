import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Dropdown, Number, InlineContainer, Container } from '@wannabewayno/reactor';
import Header from './components/Header';
import Saved from './pages/Saved';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import library from './library.jpg';
import bookshelf from './bookshelf.jpg'

function App() {

  // keeps track of where the router is
  const [ location ] = useState(window.location.pathname);

  // gets the background image based on the location of the router
  function getBackgroundImage(){
    switch(location){
      case'/': return library
      case'/search': return library
      case'/saved': return bookshelf
      default: return 'nothing'
    }
  }

  // css for the body
  const pageStyle = {
    paddingTop:'80px',
    backgroundImage:`url(${getBackgroundImage()})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundAttachment:'fixed'
 }
 
 // Changes the body css everytime the router switches pages
 useEffect(() => {
    Object.keys(pageStyle).forEach(style => {
      return document.body.style[style] = pageStyle[style];
    })  
  },[location])

  return (
    <Router>
        {/* <main style={pageStyle}> */}
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
        {/* </main> */}
    </Router>
  );
}


export default App;
