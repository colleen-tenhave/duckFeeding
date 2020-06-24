import React, { Component } from 'react';
import './App.css';

const feedingDataEntry = "http://localhost:9000/feedingDataEntry";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { feedingTime: '',
                   foodType: '',
                   feedingLocation: '',
                   numberOfDucks: '',
                   quantityOfFood: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleSubmit(event) {
    event.preventDefault();
    var body = {
      "feedingTime": this.state.feedingTime
    }
    fetch(
        "http://localhost:9000/feedingDataEntry", {
          method: 'post',
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: JSON.stringify(this.state)
        }
        )
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  render() {
      return (
        <div className="InputForm">
            <p>
              Please Enter Your Data
            </p>
            <form onSubmit={this.handleSubmit} >
              <div>
                Time of Feeding:
                <input type="text" name="feedingTime" value={this.state.feedingTime} onChange={this.handleChange}/>
              </div>
              <div>
                Type of Food: 
                <input type="text" name="foodType" value={this.state.foodType} onChange={this.handleChange}/>
              </div>
              <div>
                Feeding Location: 
                <input type="text" name="feedingLocation" value={this.state.feedingLocation} onChange={this.handleChange}/>
              </div>
              <div>
                Number of Ducks: 
                <input type="text" name="numberOfDucks" value={this.state.numberOfDucks} onChange={this.handleChange}/>
              </div>
              <div>
                Quantity of Food: 
                <input type="text" name="quantityOfFood" value={this.state.quantityOfFood} onChange={this.handleChange}/>
              </div>
              <input type="submit" value="submit"/>
            </form>
        </div>
      );
  }
}
export default App;
