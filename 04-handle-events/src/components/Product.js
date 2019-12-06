import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    this.onBuyNow = this.onBuyNow.bind(this);
  }

  onBuyNow() {
    console.log(this.props.name);
  }
  onBuyNow01 = () => {
    console.log(this.props.name);
  };

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img src={this.props.image} alt={this.props.name} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.type}</p>
            <p>
            <a
                href="#"
                className="btn btn-warning "
                onClick={this.onBuyNow}
              >
                Buy Now!!!
              </a>
              <a
                href="#"
                className="btn btn-primary "
                onClick={this.onBuyNow01}
              >
                Buy Now!!!
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
