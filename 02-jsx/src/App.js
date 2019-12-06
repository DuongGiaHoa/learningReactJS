import React, { Component } from "react";
import "./App.css";
import { of } from "rxjs";

class App extends Component {
  showInforProduct(product){
    if (product.status) {
      return <h2>
                ID: {product.id} <br/>
                Name: {product.name}<br/>
                Type: {product.type}<br/>
                Status: {product.status ? 'Active' : 'Pending'}
              </h2>
    }
  }
  render() {
    var a = 5;
    var product = {
      id: 1,
      name: 'snorlax',
      type: 'water',
      status: true
    }
    var users = [
      {
        id: 1,
        name: 'snorlax',
        age: 10
      },
      {
        id: 2,
        name: 'pikachu',
        age: 12
      },
      {
        id: 3,
        name: 'eevee',
        age: 15
      },
    ];
    var elements = users.map((user, index)=>{
      return  <h2 key={user.id}>
                ID: {user.name} <br/>
                Name: {user.age}<br/>
              </h2>
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">
            Title
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>
        <div className="">
          {this.showInforProduct(product)}
        </div>
        <hr/>
        {elements}
      </div>
    );
  }
}

export default App;
