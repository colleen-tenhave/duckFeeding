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
        this.fetchEntries();
        const data = this.state.submissions;
        return (
          <div className="Entries">
            <h2>
              Interested in learning more? 
            </h2>
            <p>
              Check out duck feeding data submissions from users all over the world:
            </p>

            <table className="Entries-list">
              <thead>
                <tr>
                  <th>Feeding Time</th>
                  <th>Feeding Location</th>
                  <th>Food Type</th>
                  <th>Number of Ducks Fed</th>
                  <th>Amount of Food</th>
                </tr>
              </thead>
              <tbody>
            {data.map(function(entry, idx){
              return (
              <tr key={idx}>
                <td>{entry.feedingTime}</td>
                <td> {entry.feedingLocation}</td>
                <td>{entry.foodType}</td>
                <td>{entry.numberOfDucks}</td
                ><td> {entry.quantityOfFood}</td>
              </tr>)
            })}
              </tbody>
            </table>
          </div>
        );
  }
}
export default App;
