import React, {useState} from 'react'
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home'
import NavBar from './components/NavBar';
import './App.css'
import Login from './components/Login';
import About from './components/About';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <NavBar setIsLoggedIn={setIsLoggedIn} />
    <Switch>
    <Route exact path="/about">
        <About />
    </Route>
    <Route exact path="/login">
        <Login setIsLoggedIn={setIsLoggedIn} />
    </Route>
    <Route path="/">
        <Home isLoggedIn={isLoggedIn}/>
    </Route>
    </Switch>
    </>
  )
}

export default App