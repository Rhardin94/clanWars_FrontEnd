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


  addPoints = async (team, points) => {
    console.log(points);
    // await axios.post(`${localServer}/${team}`, {points: parseInt(points)})
    await axios.post(`${liveServer}/${team}`, {points: parseInt(points)})
    .then((response) => {
      console.log(response.data)
      this.getScores();
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
    }, 6000);
  }
  // componentWillUnmount is a React lifecycle method that runs when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  };
  
  // This renders all of the HTML to the page
  render () {
    return (
      <section className="row text-center mx-0">
        <div className="col-lg-2 m-1">
          <div className="card">
            <div className="card-header">
              <h3>Green Goats</h3>
              <h4 onChange={this.onChange}>{this.state.Green}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='green' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
            <button className="btn btn-success m-1" onClick={() => this.addPoints(1, document.getElementById('green').value)}>Add Points</button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 m-1">
          <div className="card">
            <div className="card-header">
              <h3>Red Reapers</h3>
              <h4 onChange={this.onChange}>{this.state.Red}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='red' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={() => this.addPoints(2, document.getElementById('red').value)}>Add Points</button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 m-1">
          <div className="card">
            <div className="card-header">
              <h3>Blue Angels</h3>
              <h4 onChange={this.onChange}>{this.state.Blue}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='blue' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={() => this.addPoints(3, document.getElementById('blue').value)}>Add Points</button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 m-1">
          <div className="card">
            <div className="card-header">
              <h3>Mellow Yellows</h3>
              <h4 onChange={this.onChange}>{this.state.Yellow}</h4>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" id='yellow' placeholder="Enter Points" />
            </div>
            <div className="card-footer">
              <button className="btn btn-warning" onClick={() => this.addPoints(4, document.getElementById('yellow').value)}>Add Points</button>
            </div>
          </div>
        </div>
      </section>
    )
    }
}
export default Points;
