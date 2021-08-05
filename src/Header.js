import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <section className="d-flex align-items-center position-relative bg-dark bg-size-cover bg-position-center min-vh-100 overflow-hidden pt-6 pb-lg-5">
        <div className="container pt-4 pb-5 py-lg-5">
          <div className="row align-items-center py-3">
            <div className="col-xl-6 col-lg-5 d-flex justify-content-end">
              <div className="pt-2 mx-auto mb-5 mb-lg-0 ms-lg-0 me-xl-7 text-center text-lg-start">
                <h1 className="display-4 text-light pb-2"><span className="fw-light">Hi 👋 I'm </span>Emily Stanek!</h1>
                <p className="h4 fw-light text-light opacity-70 line-height-base">I'm a full stack developer with a specialization in UX/UI.</p>
                <a className="d-inline-flex align-items-center text-decoration-none pt-2 mt-4 mb-5" href="#demos" data-scroll="">
                  <span className="btn btn-icon rounded-circle border-light flex-shrink-0 px-3">
                    <i className="ai-arrow-down h4 text-light my-1"></i>
                  </span>
                  <span className="ms-3 text-light fw-medium">View Portfolio</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Header