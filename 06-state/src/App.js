import React, { Component } from "react";
import "./App.css";
import Product from "./components/Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [
        {
          id: 1,
          name: "Snorlax",
          type: "Water",
          image: "https://image.flaticon.com/icons/svg/189/189001.svg",
          status: true
        },
        {
          id: 2,
          name: "Pikachu",
          type: "Electric",
          image: "https://image.flaticon.com/icons/svg/188/188987.svg",
          status: true
        },
        {
          id: 3,
          name: "Charmander",
          type: "Fire",
          image: "https://image.flaticon.com/icons/svg/188/188990.svg",
          status: false
        },
        {
          id: 4,
          name: "Squirtle",
          type: "Water",
          image: "https://image.flaticon.com/icons/svg/188/188988.svg",
          status: true
        }
      ],
      isActive: true
    };
    // this.onSetState = this.onSetState.bind(this);
  }

  onSetState=() =>{
    this.setState({isActive : !this.state.isActive});
    // if (this.state.isActive===true) {
    //   this.setState({
    //     isActive:false
    //   });
    // }else{
    //   this.setState({
    //     isActive:true
    //   });
    // }
  }

  render() {
    let elements = this.state.pokemons.map((pokemon, index) => {
      if (pokemon.status) {
        return (
          <tr key={index}>
            <td>{index}</td>
            <td>{pokemon.name}</td>
            <td>{pokemon.type}</td>
          </tr>
        );
      }
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">
            State
          </a>
        </nav>
        <div className="container">
          <div className="row">
            
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>{elements}</tbody>
            </table>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.onSetState}
            >
              Active - {this.state.isActive === true ? "true" : "false"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
