/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskSort extends Component {
  //   componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //   }
  onClick = (sortBy, sortValue) => {
      // console.log(sortBy, '|', sortValue);
    this.props.onSort(sortBy, sortValue);
  };

  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort <span className="fa fa-caret-down ml" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li onClick={() => this.onClick("name", 1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "name" && this.props.sortValue === 1
                      ? "sort_selected"
                      : ""
                  }
                >
                  <span className="fa fa-sort-alpha-asc pr"></span>
                </a>
              </li>
              <li onClick={() => this.onClick("name", -1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "name" && this.props.sortValue === -1
                      ? "sort_selected"
                      : ""
                  }
                >
                  <span className="fa fa-sort-alpha-desc pr"></span>
                </a>
              </li>
              <li role="separator" className="divider" />
              <li onClick={() => this.onClick("status", 1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "status" && this.props.sortValue === 1
                      ? "sort_selected"
                      : ""
                  }
                >
                  Active
                </a>
              </li>
              <li onClick={() => this.onClick("status", -1)}>
                <a
                  role="button"
                  className={
                    this.props.sortBy === "status" && this.props.sortValue === -1
                      ? "sort_selected"
                      : ""
                  }
                >
                  Inactive
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default TaskSort;
