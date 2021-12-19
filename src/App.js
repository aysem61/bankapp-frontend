import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";
import Product from "./product/Product";
import Price from "./price/Price";
import Login from "./login/Login";
import Register from "./register/Register";
import User from "./user/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/price">
            <Price />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
            <Route path="/user">
              <User />
            </Route>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
