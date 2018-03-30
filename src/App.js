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
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
              <Link to="/" className="py-2">
                <img src={logo} className="app-logo" alt="logo" />
              </Link>
              <NavLink to="/" className="py-2 my-auto d-none d-md-inline-block">Home</NavLink>
              <NavLink to="/tour" className="py-2 my-auto d-none d-md-inline-block">Tour</NavLink>
              <NavLink to="/product" className="py-2 my-auto d-none d-md-inline-block">Product</NavLink>
              <NavLink to="/features" className="py-2 my-auto d-none d-md-inline-block">Features</NavLink>
              <NavLink to="/enterprise" className="py-2 my-auto d-none d-md-inline-block">Enterprise</NavLink>
              <NavLink to="/billing" className="py-2 my-auto d-none d-md-inline-block">Billing</NavLink>
              <NavLink to="/pricing" className="py-2 my-auto d-none d-md-inline-block">Pricing</NavLink>
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
