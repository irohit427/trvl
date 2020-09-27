import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>  
    </BrowserRouter>
    // <div className="App">
    // </div>
  );
}

export default App;
