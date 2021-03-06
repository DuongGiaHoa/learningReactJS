/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    var { task, index } = this.props;
    return (
        <tr>
          <td>{index + 1}</td>
          <td>{task.name}</td>
          <td className="text-center">
            <span
              className={
                task.status === true
                  ? "label label-primary"
                  : "label label-default"
              }
              onClick={this.onUpdateStatus}
            >
              {task.status === true ? "Active" : "Inactive"}
            </span>
          </td>
          <td className="text-center">
            <button
              type="button"
              className="btn btn-warning btn-xs"
              onClick={this.onUpdate}
            >
              <span className="fa fa-pencil" />
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger btn-xs"
              onClick={this.onDelete}
            >
              <span className="fa fa-trash" />
            </button>
          </td>
        </tr>
    );
  }
}

export default TaskItem;
