import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm.js'
import Entries from './Entries.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.rerenderCallback = this.rerenderCallback.bind(this);
    this.state = {
      submissions: []
    };
   }

  rerenderCallback() {
    this.fetchEntries();
  }

  fetchEntries() {
    fetch("http://localhost:9000/feedingDataEntry")
    .then(res => res.text())
    .then(res => this.setState({ submissions: JSON.parse(res)}));
  }

  componentWillMount(){
    this.fetchEntries();
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
          <Entries submissions={this.state.submissions}/>
        </div>
      );
  }
}
export default App;
