import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <img
              src="https://image.flaticon.com/icons/svg/189/189001.svg"
              alt=""
            />
            <div className="caption">
              <h3>Snorlax</h3>
              <p>9999</p>
              <p>
                <a href="#" className="btn btn-primary">
                  Add
                </a>
                <a href="#" className="btn btn-default">
                  Update
                </a>
              </p>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Product;
