import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeRow1 from "../components/Home/Home-Row-1";
import HomeRow2 from "../components/Home/Home-Row-2";
import HomeRow3 from "../components/Home/Home-Row-3";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5 hero">
            <h1 className="display-4 font-weight-light">
              Routestrap
              <span className="text-muted" style={{
                display: 'inline-block',
                position: 'absolute',
                marginTop: '2rem',
                paddingLeft: '1rem',
                fontSize: '1rem',
                fontFamily: '"Roboto", sans-serif',
              }}>
                v0.1.0
              </span>
            </h1>
            <p className="lead my-5 font-weight-normal">
              Routestrap is a React app template using React-Router and
              Bootstrap 4. It comes with seven pre-built pages allowing you to
              get a new project started super quickly.
            </p>
            <a
              href="https://github.com/derekbtw/routestrap"
              className="btn btn-dark d-block d-md-inline mr-md-1 mb-2 mb-md-0">
              View on GitHub
            </a>
            <a
              href="https://github.com/derekbtw/routestrap/archive/master.zip"
              target="_blank"
              className="btn btn-outline-dark d-block d-md-inline ml-md-1">
              Download
            </a>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
        <HomeRow1 />
        <HomeRow2 />
        <HomeRow3 />
        <HomeRow3 />
      </div>
    )
  }
}

export default Home;
