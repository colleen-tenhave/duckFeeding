import React, { Component } from 'react';
import './App.css';
import './Entries.css';

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
          <div className="Entries">
            <h2>
              Submissions From Fellow Duck Lovers: 
            </h2>
            <table className="Entries-list">
            {data.map(function(entry, idx){
              return (<tr key={idx}><td>Feeding Time: {entry.feedingTime}</td><td> Feeding Location: {entry.feedingLocation}</td><td>
              Food Type: {entry.foodType}</td><td> Number of Ducks Fed: {entry.numberOfDucks}</td><td> Amount of Food: {entry.quantityOfFood}</td></tr>)
            })}
            </table>
          </div>
        );
  }
}
export default App;
