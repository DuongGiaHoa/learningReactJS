import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskEditting from "./components/TaskEditting";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { of } from "rxjs";
import { returnStatement } from "@babel/types";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditting: null,
      filter: {
        name: "",
        status: 0
      }
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }

  random01() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateId() {
    return (
      this.random01() +
      "-" +
      this.random01() +
      "-" +
      this.random01() +
      "-" +
      this.random01() +
      "-" +
      this.random01()
    );
  }
  onSubmit = data => {
    var { tasks } = this.state;
    data.id = this.generateId();
    tasks.push(data);

    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // localStorage.clear();
  };

  onSubmitEdit = data => {
    var { tasks } = this.state;
    var index = this.findIndex(data.id);
    tasks[index] = data;

    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // localStorage.clear();
  };

  onUpdateStatus = id => {
    var index = this.findIndex(id);
    var { tasks } = this.state;

    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  findIndex = id => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  onDelete = id => {
    var index = this.findIndex(id);
    var { tasks } = this.state;
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  onUpdate = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditting = tasks[index];
    this.setState({
      taskEditting: taskEditting
    });
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = +filterStatus;
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  };
  render() {
    //var tasks = this.state.tasks;
    var { tasks, taskEditting } = this.state;
    // if (filter) {
    //   if (filter.name) {
    //     tasks.filter((task)=>{
    //       return task.name.toLowerCase().indexOf(filter.name)!==0;
    //     });
    //   }
    // }
    return (
      <div className="container">
        <h1 className="text-center">Manage Tasks</h1>
        <hr />
        <div className="row">
          <TaskForm onSubmit={this.onSubmit} />
          <div className="col-12">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add Task
            </button>

            <TaskControl />
            <div className="row">
              <div className="col-12">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                  onFilter={this.onFilter}
                />
              </div>
            </div>
          </div>
        </div>
        <TaskEditting onSubmitEdit={this.onSubmitEdit} task={taskEditting} />
      </div>
    );
  }
}

export default App;
