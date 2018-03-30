import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (
      <div>
        <style>{`
          .pricing-header {
            max-width: 700px;
          }
          .card-deck .card {
            min-width: 220px;
          }
        `}</style>

        <div className="container">
          <div className="row">
            <div className="col py-5">

              <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">
                  Quickly build an effective pricing table for your potential
                  customers with this Bootstrap example. It's built with default
                  Bootstrap components and utilities with little customization.
                </p>
              </div>

              <div className="card-deck text-center">
                {/* Free */}
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $0 <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary">
                      Sign up for free
                    </button>
                  </div>
                </div>

                {/* Pro */}
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $15 <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-primary">
                      Get started
                    </button>
                  </div>
                </div>

                {/* Enterprise */}
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Enterprise</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $29 <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-primary">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing;
