import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      

        <div className="col-6">
          <div className="btn-group mt-2">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                <i className="fa fa-sort-alpha-asc"></i>
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-sort-alpha-desc"></i>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Active
              </a>
              <a className="dropdown-item" href="#">
                Inactive
              </a>
            </div>
          </div>
        </div>
 
    );
  }
}

export default Sort;
