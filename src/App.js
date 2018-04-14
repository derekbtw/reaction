import React, { Component } from "react";
import {
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./routes/Home";
import Tour from "./routes/Tour";
import Product from "./routes/Product";
import Features from "./routes/Features";
import Enterprise from "./routes/Enterprise";
import Billing from "./routes/Billing";
import Pricing from "./routes/Pricing";
import Footer from "./components/Footer";
import logo from "./components/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <div className="container">
              <Link to="/" className="navbar-brand">
                {/* <img src={logo} alt="logo"/> */}
                Reaction
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ml-auto">
                  <NavLink to="/" className="nav-link px-3">Home</NavLink>
                  <NavLink to="/tour" className="nav-link px-3">Tour</NavLink>
                  <NavLink to="/product" className="nav-link px-3">Product</NavLink>
                  <NavLink to="/features" className="nav-link px-3">Features</NavLink>
                  <NavLink to="/enterprise" className="nav-link px-3">Enterprise</NavLink>
                  <NavLink to="/billing" className="nav-link px-3">Billing</NavLink>
                  <NavLink to="/pricing" className="nav-link px-3">Pricing</NavLink>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/tour" component={Tour} />
            <Route path="/product" component={Product} />
            <Route path="/features" component={Features} />
            <Route path="/enterprise" component={Enterprise} />
            <Route path="/billing" component={Billing} />
            <Route path="/pricing" component={Pricing} />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
