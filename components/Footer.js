import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer */}
        <div className="page-footer font-small  pt-4">
          {/* Footer Links */}
          <div className="container-fluid text-center text-md-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-6 mt-md-0 mt-3 Social">
                {/* Content */}
                <h5 className="text-uppercase">Footer Content</h5>
                <p>
                  Here you can use rows and columns to organize your footer
                  content.
                </p>
                <div className="form-row">
                  <div className="col-md-8 ml-auto">
                    <div className="input-group input-group-lg z-depth-1">
                      <div className="input-group-prepend">
                        <span className="input-group-text rgba-white-light border-0">
                          <i className="fa fa-envelope white-text" />
                        </span>
                      </div>
                      <input
                        type="email"
                        name="EMAIL"
                        className="form-control form-control-lg rgba-white-light white-text border-0 z-depth-0"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-md mr-auto">
                    <button class="btn btn-info btn-block ">Subscribe</button>
                  </div>
                </div>
              </div>

              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none pb-3" />
              {/* Grid column */}
              <div className="col-md-3 mb-md-0 mb-3">
                {/* Links */}
                <h5 className="text-uppercase">Explore</h5>
                <ul className="list-unstyled">
                  <li>
                    <p>Browse Recipes</p>
                  </li>
                  <li>
                    <p>Submit Recipes</p>
                  </li>
                  <li>
                    <p>Out Chefs</p>
                  </li>
                  <li>
                    <p>Latest News</p>
                  </li>
                  <li>
                    <p>Contact</p>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 mb-md-0 mb-3">
                {/* Links */}
                <h5 className="text-uppercase mb-3">Contact</h5>
                <ul className="list-unstyled">
                  <li>
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="\static\images\location.png"
                          alt=""
                          width="32"
                          height="32"
                          title="Bootstrap"
                        />
                      </div>
                      <div className="col-10">
                        <p>
                          787 Mark View Street, <br /> New Town, California{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row mb-3">
                      <div className="col-2">
                        <img
                          src="\static\images\phone (1).png"
                          alt=""
                          width="32"
                          height="32"
                          title="Bootstrap"
                        />
                      </div>
                      <div className="col-10">
                        <p>1 212 485-4512</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="\static\images\mail.png"
                          alt=""
                          width="32"
                          height="32"
                          title="Bootstrap"
                        />
                      </div>
                      <div className="col-10">
                        {" "}
                        <p>Support@example.com</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
