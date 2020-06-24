import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm.js'
import Entries from './Entries.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.rerenderCallback = this.rerenderCallback.bind(this);
   }

  rerenderCallback(apiResponse) {
    this.setState({apiResponse: apiResponse})
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              Welcome to Duck Hub.
            </h1>
            <p className="App-subtitle">
              The world's largest duck data sharing platform
            </p>
          </header>
          <InputForm rerenderCallback={this.rerenderCallback}/>
          <Entries />
        </div>
      );
  }
}
export default App;
