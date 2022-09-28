// Needed packages
import React, { Component } from 'react';
import axios from "axios";
import moment from "moment";
const localServer = "http://localhost:3001/api";
const liveServer = "https://clanwarserver.herokuapp.com/api";
class Points extends Component {

  state = {
    Green: 0,
    Red: 0,
    Blue: 0,
    Yellow: 0,
  }

  // this function is used in conjunction with the componentDidMount function to interact with the server
  updateInterval;


  addPoints = async (teamId, points, teamName) => {
    console.log(points);
    // await axios.post(`${localServer}/${teamId}`, {points: parseInt(points)})
    await axios.post(`${liveServer}/${teamId}`, {points: parseInt(points)})
    .then((response) => {
      // console.log(response.data)
      console.log(teamId);
      this.getScores();
      document.getElementById(teamName).value = "";
    })
    .catch((err) => {
      console.log(err)
    })
  };

  subtractPoints = async (teamId, points, teamName) => {
    console.log(points);
    // await axios.put(`${localServer}/${teamId}`, {points: parseInt(points)})
    await axios.put(`${liveServer}/${teamId}`, {points: parseInt(points)})
    .then((response) => {
      console.log(response.data)
      this.getScores();
      document.getElementById(teamName).value = "";
    })
    .catch((err) => {
      console.log(err)
    })
  };

  // Get the scores from the server
  getScores = async () => {
    // await axios.get(localServer)
    await axios.get(liveServer)
    .then((response) => {
      // console.log(response.data)
      this.setState({
        Green: response.data[0].points,
        Red: response.data[1].points,
        Blue: response.data[2].points,
        Yellow: response.data[3].points
      });
    })
    .catch((err) => {
      console.log(err)
    })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.getScores();
  };
 // ComponentDidMount is a React lifecycle method that runs when the component is first rendered
  componentDidMount() {
    this.getScores();
    this.updateInterval = setInterval(() => {
      this.getScores();
    }, 10000);
  }
  // componentWillUnmount is a React lifecycle method that runs when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  };
  
  // This renders all of the HTML to the page
  render () {
    return (
      <section className="row text-center p-1">
        <div className="col-lg-3">
          <div className="card bg-secondary">
            <div className="card-header">
              <h3>Green Goats</h3>
              <h4 onChange={this.onChange}>{this.state.Green ? `Green: ${this.state.Green}` : "Retrieving Scores..."}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='green' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
            <button className="btn btn-success" onClick={() => this.addPoints(1, document.getElementById('green').value, 'green')}>Add Points</button>
            <button className="btn btn-info m-1" onClick={() => this.subtractPoints(1, document.getElementById('green').value, 'green')}>Subtract Points</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card bg-secondary">
            <div className="card-header">
              <h3>Red Reapers</h3>
              <h4 onChange={this.onChange}>{this.state.Red ? `Red: ${this.state.Red}` : "Retrieving Scores..."}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='red' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={() => this.addPoints(2, document.getElementById('red').value, 'red')}>Add Points</button>
              <button className="btn btn-info m-1" onClick={() => this.subtractPoints(2, document.getElementById('red').value, 'red')}>Subtract Points</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card bg-secondary">
            <div className="card-header">
              <h3>Blue Angels</h3>
              <h4 onChange={this.onChange}>{this.state.Blue ? `Blue: ${this.state.Blue}` : "Retrieving Scores..."}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='blue' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={() => this.addPoints(3, document.getElementById('blue').value, 'blue')}>Add Points</button>
              <button className="btn btn-info m-1" onClick={() => this.subtractPoints(3, document.getElementById('blue').value, 'blue')}>Subtract Points</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card bg-secondary">
            <div className="card-header">
              <h3>Mellow Yellows</h3>
              <h4 onChange={this.onChange}>{this.state.Yellow ? `Yellow: ${this.state.Yellow}` : "Retrieving Scores..."}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='yellow' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
              <button className="btn btn-warning" onClick={() => this.addPoints(4, document.getElementById('yellow').value, 'yellow')}>Add Points</button>
              <button className="btn btn-info m-1" onClick={() => this.subtractPoints(4, document.getElementById('yellow').value, 'yellow')}>Subtract Points</button>
            </div>
          </div>
        </div>
      </section>
    )
    }
}
export default Points;
