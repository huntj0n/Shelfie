import React, {Component} from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [
        {
          id: 1,
          name: "hat",
          price: 5,
          imgurl: '',
        },
        {
          id: 2,
          name: "shirt",
          price: 10,
          imgurl: '',
        },
        {
          id: 3,
          name: "pants",
          price: 15,
          imgurl: '',
        },
        {
          id: 4,
          name: "shoes",
          price: 20,
          imgurl: '',
        }
      ]
    }
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <main>
          <div className="dash">
            <Dashboard inventory = {this.state.inventory}/>
          </div>
          <div className="form">
            <Form/>
          </div>
        </main>
      </div>
    );
  }
}

