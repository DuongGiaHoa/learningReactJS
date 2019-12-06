import React, { Component } from "react";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

class TaskControl extends Component {
  render() {
    return (
        <div className="row mt">
          <TaskSearch />
          <TaskSort 
          />
        </div>
    );
  }
}

export default TaskControl;
