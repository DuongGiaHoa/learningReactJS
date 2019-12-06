/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskSort extends Component {
  //   componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //   }
  onClick = (sortBy, sortValue) => {
    // console.log(sortBy, '|', sortValue);
    this.props.onSort({
      by: sortBy,
      value: sortValue
    });
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
                  this.props.sort.by === "name" && this.props.sort.value === 1
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
                  this.props.sort.by === "name" && this.props.sort.value === -1
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
                  this.props.sort.by === "status" && this.props.sort.value === 1
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
                  this.props.sort.by === "status" && this.props.sort.value === -1
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

const mapStateToProps = state => {
  return {
    sort: state.sort
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: sort => {
      dispatch(actions.sortTask(sort));
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);