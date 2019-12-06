import React, { Component } from "react";

class Result extends Component {
	setStyle(){
		return{
			color:this.props.color,
      fontWeight:'bold',
      fontSize:this.props.fontSize
		}
	}
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-10">
        <div className="panel panel-default">
          <div className="panel-heading">Color: {this.props.color} - Font-size: {this.props.fontSize}px</div>
          <div className="panel-body" style={this.setStyle()}>
            <div id="content" >content setting</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
