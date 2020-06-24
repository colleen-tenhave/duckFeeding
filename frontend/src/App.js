import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm.js'
import Entries from './Entries.js'

const feedingTime = "http://localhost:9000/feedingTime";
class App extends Component {
  constructor(props) {
    super(props);
   }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Welcome to Duck Hub
            </p>
          </header>
          <InputForm />
          <Entries />
        </div>
      );
  }
}
export default App;
