import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md text-center">
            <Link to="/">
              <img src={logo} className="app-logo" alt="logo" />
            </Link>
            <small className="d-block mb-3 text-muted">
              &copy; 2018
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><Link to="/" className="text-muted">Cool Stuff</Link></li>
              <li><Link to="/" className="text-muted">Random feature</Link></li>
              <li><Link to="/" className="text-muted">Team feature</Link></li>
              <li><Link to="/" className="text-muted">Stuff for developers</Link></li>
              <li><Link to="/" className="text-muted">Another one</Link></li>
              <li><Link to="/" className="text-muted">Last time</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><Link to="/" className="text-muted">Resource</Link></li>
              <li><Link to="/" className="text-muted">Resource name</Link></li>
              <li><Link to="/" className="text-muted">Another resource</Link></li>
              <li><Link to="/" className="text-muted">Final resource</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><Link to="/" className="text-muted">Business</Link></li>
              <li><Link to="/" className="text-muted">Education</Link></li>
              <li><Link to="/" className="text-muted">Government</Link></li>
              <li><Link to="/" className="text-muted">Gaming</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><Link to="/" className="text-muted">Team</Link></li>
              <li><Link to="/" className="text-muted">Locations</Link></li>
              <li><Link to="/" className="text-muted">Privacy</Link></li>
              <li><Link to="/" className="text-muted">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
