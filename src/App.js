import React, {useState} from 'react'
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/Home'
import NavBar from './components/NavBar';
import './App.css'
import Login from './components/Login';
import About from './components/About';
import CartList from './components/CartList';
import {CartProvider} from 'react-use-cart'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
    <Switch>
    <Route exact path="/about">
        <About />
    </Route>
    <Route exact path="/login">
        <Login setIsLoggedIn={setIsLoggedIn} />
    </Route>
    <CartProvider>
    <Route exact path="/cart">
        <CartList isLoggedIn={isLoggedIn}/>
    </Route>  
    <Route exact path="/">
        <Home isLoggedIn={isLoggedIn}/>
    </Route>
    </CartProvider>
    </Switch>
    </>
  )
}

export default App