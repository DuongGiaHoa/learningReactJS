import React, { Component } from "react";

class FontSizeSetting extends Component {
  changeSize(value){
    this.props.onChangeSize(value);
  }


  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Font-size: {this.props.fontSize}px</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success" onClick={()=>this.changeSize(+2)}>
            Increase
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger" onClick={()=>this.changeSize(-2)}>
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default FontSizeSetting;
