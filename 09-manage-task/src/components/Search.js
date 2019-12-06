import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      
        <div className="col-6">
          <div className="input-group mt-2 mb-3">
            <input
              type="text"
              className="form-control border-primary"
              placeholder="Keyword"
              aria-label="Keyword"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append ">
              <button className="btn btn-outline-primary " type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Search;
