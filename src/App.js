import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js'
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>  
    </BrowserRouter>
    // <div className="App">
    // </div>
  );
}

export default App;
