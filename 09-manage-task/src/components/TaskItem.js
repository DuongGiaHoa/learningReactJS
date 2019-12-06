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
        <th scope="row">{index + 1}</th>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "badge badge-success"
                : "badge badge-secondary"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Active" : "Inactive"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            data-toggle="modal"
            data-target="#editTask"
            onClick={this.onUpdate}
          >
            <span className="fa fa-edit"></span>
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash"></span>
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
