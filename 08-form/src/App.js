import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtDesc: "",
      slGender: 1,
      rdLang: "en",
      cbStatus: true
    };
  }

  onHandleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onHandleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Username"
                      name="txtUsername"
                      onChange={this.onHandleChange}
                      value={this.state.txtUsername}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id=""
                      placeholder="Password"
                      name="txtPassword"
                      onChange={this.onHandleChange}
                      value={this.state.txtPassword}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      id=""
                      name="txtDesc"
                      onChange={this.onHandleChange}
                      value={this.state.txtDesc}
                    />
                  </div>
                  <label>Sex</label>
                  <select
                    className="form-control"
                    name="slGender"
                    value={this.state.slGender}
                    onChange={this.onHandleChange}
                  >
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                  </select>
                  <br />
                  <div className="radio">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="rdLang"
                        value="en"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "en"}
                      />
                      English
                    </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="rdLang"
                        value="vi"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "vi"}
                      />
                      Vietnamese
                    </label>
                  </div>
                  <br />
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        value={true}
                        onChange={this.onHandleChange}
                        checked={this.state.cbStatus === true}
                        name="cbStatus"
                      />
                      Status
                    </label>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  &nbsp;
                  <button type="reset" className="btn btn-primary">
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
