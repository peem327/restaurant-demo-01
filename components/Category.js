import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid pt-5 my-5 mb-3 z-depth-1">
          <section className="p-md-3 mx-md-5 text-center text-lg-left">
            <h3 className="text-center mx-auto mb-4 pb-2 font-Regular">
              Choose a Category
            </h3>
            <h1 className="text-center mx-auto font-weight-bold mb-4 pb-2">
              Recipe Categories
            </h1>
            <div className="row">
              <div className="col-md-3 mb-4 Category">
                <div className="p-4">
                  <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                    <img
                      src="\static\images\1.jpg"
                      className="img-fluid rounded-circle  "
                    />
                  </div>
                  <div className="text-center mt-3" >
                    <h6 className="font-weight-bold pt-2">Tom Yum Kung</h6>
                    <p className="text-muted">
                      <small>
                        <i>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </i>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4 Category">
                <div className="p-4">
                  <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                    <img
                      src="\static\images\2.jpg"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h6 className="font-weight-bold pt-2">Green papaya salad</h6>
                    <p className="text-muted">
                      <small>
                        <i>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </i>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4 Category">
                <div className="p-4">
                  <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                    <img
                      src="\static\images\3.jpg"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h6 className="font-weight-bold pt-2">Grilled chicken</h6>
                    <p className="text-muted">
                      <small>
                        <i>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </i>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4 Category">
                <div className="p-4">
                  <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                    <img
                      src="\static\images\4.jpg"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h6 className="font-weight-bold pt-2">Pad Thai</h6>
                    <p className="text-muted">
                      <small>
                        <i>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </i>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Category;
