import React, { Component } from "react";
import "./App.css";
import Product from "./components/Product";
import produce from "immer";

class App extends Component {

  onClick(){
    console.log('xxx');
  }
  onClick01(text){
    console.log(text);
  }

  render() {
    var pokemons = [
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
    ];
    let elements = pokemons.map((pokemon, index) => {
      if (pokemon.status) {
        return (
          <Product
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            image={pokemon.image}
          />
        );
      }
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">
            Props
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-danger" onClick={ this.onClick }>
                Click Me!!!
              </button>
              <button type="button" className="btn btn-primary" onClick={ () => this.onClick01('xxx01') }>
                Click Me!!!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
