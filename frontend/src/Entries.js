import React, { Component } from 'react';
import './App.css';

const feedingDataEntry = "http://localhost:9000/feedingDataEntry";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { submissions: []};
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
        console.log(typeof this.state.submissions);
        const data = this.state.submissions;
        return (
          <div>
            <h2>
              Submissions From Fellow Duck Lovers: 
            </h2>
            {data.map(function(entry, idx){
              return (<div key={idx}>Feeding Time: {entry.feedingTime}, Feeding Location: {entry.feedingLocation},
              Food Type: {entry.foodType}, Number of Ducks Fed: {entry.numberOfDucks}, Amount of Food: {entry.quantityOfFood}</div>)
            })}
          </div>
        );
  }
}
export default App;
