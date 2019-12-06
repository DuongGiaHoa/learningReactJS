import React, { Component } from "react";
import Search from './Search';
import Sort from './Sort';

class TaskControl extends Component {
  render() {
    return (
      <div className="row">
        <Search/>
        <Sort/>
      </div>
    );
  }
}

export default TaskControl;
