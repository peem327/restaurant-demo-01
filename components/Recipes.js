import React, { Component } from "react";

class Recipes extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-12">
            {/* Card */}
            <div className="card-cascade wider  my-4">
              {/* Card image */}
              <div className="view view-cascade overlay">
                <img
                  className="card-img-top"
                  src="\static\images\bg.jpg"
                  alt="Card image cap"
                />
              </div>
              {/* Card content */}
              <div className="container card-body card-body-cascade text-center Recipes">
                <div className="container">
                  <div className="card text-center bg-transparent">
                    <div className="card-body">
                      <h3 className=" py-2 font-Regular">recent Recipes</h3>
                      <h1 className="card-title">
                        <strong className="Latest-Recipes" id="Title-Recipes">
                          Latest Recipes
                        </strong>
                      </h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 Recipes-Card">
                      <div className="card card-detail-recieps">
                        <img
                          src="\static\images\1.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Tom Yum Kung</h5>
                          <div className="amber-text fa-xs mb-1">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>

                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                        </div>
                        <div className=" row">
                          <div className="col-md-6 ">
                            <a href="#">Go somewhere</a>
                          </div>
                          <div className="col-md-6 ">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4  Recipes-Card">
                      <div className="card">
                        <img
                          src="\static\images\2.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Green papaya salad</h5>
                          <div class="amber-text fa-xs mb-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6 ">
                            <a href="#">Go somewhere</a>
                          </div>
                          <div className="col-md-6 ">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 Recipes-Card">
                      <div className="card">
                        <img
                          src="\static\images\3.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Grilled chicken</h5>
                          <div class="amber-text fa-xs mb-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6 ">
                            <a href="#">Go somewhere</a>
                          </div>
                          <div className="col-md-6 ">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-4 Recipes-Card">
                      <div className="card">
                        <img
                          src="\static\images\4.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Pad Thai</h5>
                          <div class="amber-text fa-xs mb-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                        </div>
                        <div className=" row">
                          <div className="col-md-6 ">
                            <a href="#">Go somewhere</a>
                          </div>
                          <div className="col-md-6 ">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 Recipes-Card">
                      <div className="card">
                        <img
                          src="\static\images\5.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Green curry</h5>
                          <div class="amber-text fa-xs mb-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <a href="#">Go somewhere</a>
                          </div>
                          <div className="col-md-6">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 Recipes-Card">
                      <div className="card">
                        <img
                          src="\static\images\6.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Thai Massaman Curry</h5>
                          <div class="amber-text fa-xs mb-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <a href="#">Go somewhere</a>
                          </div>
                          <div className="col-md ">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* View All Recipes */}
              <div className="container my-5">
                <div className="row">
                  <div className="col" style={{ textAlign: "center" }}>
                    <button type="button" className="btn btn-info btn-lg">
                      View All Recipes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipes;
