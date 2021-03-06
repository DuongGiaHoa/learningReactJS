import React, { Component } from "react";

class TaskEditting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: true
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.taskEditting !== null) {
      this.setState((prevState, nextProps) => ({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      }));
    }
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };

  onSubmitEdit = event => {
    event.preventDefault();
    this.props.onSubmitEdit(this.state);

    this.onClear();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: true
    });
  };
  onClose = () => {};

  render() {
    var { id } = this.state;
    return (
      <div
        className="modal fade"
        id="editTask"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editTask"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary" id="editTask">
                Edit Task
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmitEdit={this.onSubmitEdit}>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Name
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Status
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    id="inputGroupSelect01"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer text-center">
                <button type="submit" className="btn btn-outline-primary">
                  Edit
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-outline-dark close-modal"
                  onClick={this.onClear}
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskEditting;
