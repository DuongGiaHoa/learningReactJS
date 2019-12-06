import React, { Component } from "react";
class Product extends Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img src={this.props.image} alt={this.props.name} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.type}</p>
            <p>
              <a href="#" className="btn btn-primary">
                Buy Now!!!
              </a>
              <a href="#" className="btn btn-default">
                Add to Cart
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
