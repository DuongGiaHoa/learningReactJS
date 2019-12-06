import React, { Component } from "react";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

class TaskControl extends Component {
  render() {
    return (
        <div className="row mt">
          <TaskSearch onSearch={this.props.onSearch} />
          <TaskSort 
            onSort={this.props.onSort} 
            sortBy={this.props.sortBy}
            sortValue={this.props.sortValue}
          />
        </div>
    );
  }
}

export default TaskControl;
