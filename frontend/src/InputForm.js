import React, { Component } from 'react';
import './App.css';
import './InputForm.css';

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
    fetch(
        "http://localhost:9000/feedingDataEntry", {
          method: 'post',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(this.state)
        }
    )  
    .then(response => response.json())
    .then((response) => {
      alert("Thank you, your data has been submitted");
      this.setState({
        feedingTime: '',
        foodType: '',
        feedingLocation: '',
        numberOfDucks: '',
        quantityOfFood: ''
      })
      this.props.rerenderCallback(response);
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  render() {
      const times = Array.from(Array(24).keys());
      return (
        <div className="InputForm">
            <h2>
              Have Data to Share? We'd Love To Hear From You
            </h2>
            <p>
              Please submit your duck feeding observations below:
            </p>
            <form onSubmit={this.handleSubmit} >
                <div>
                Time of Feeding:&nbsp;
                <select name="feedingTime" value={this.state.feedingTime} onChange={this.handleChange} required>
                  {times.map(function(time, index){
                    return(
                    <option key={index}>{time}:00</option>
                    )
                  })}
                </select>
                </div>
              <div>
                Type of Food:&nbsp;&nbsp;
                <input type="text" name="foodType" value={this.state.foodType} onChange={this.handleChange} required/>
              </div>
              <div>
                Feeding Location:&nbsp;
                <input type="text" name="feedingLocation" value={this.state.feedingLocation} onChange={this.handleChange} required/>
              </div>
              <div>
                Number of Ducks:&nbsp;
                <input type="number" name="numberOfDucks" value={this.state.numberOfDucks} onChange={this.handleChange} required/>
              </div>
              <div>
                Quantity of Food:&nbsp; 
                <input type="text" name="quantityOfFood" value={this.state.quantityOfFood} onChange={this.handleChange} required/>
              </div>
              <input className="InputForm-submit" type="submit" value="submit"/>
            </form>
        </div>
      );
  }
}
export default App;
