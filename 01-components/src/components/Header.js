import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#">
          Title
        </a>
        <ul className="nav navbar-nav">
          <li >
            <a href="#">Home</a>
          </li>
          <li className="active">
            <a href="#">Product</a>
          </li>
        </ul>
      </nav>
			

      
    );
  }
}

export default Header;
