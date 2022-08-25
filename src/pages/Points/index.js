// Needed packages
import React, { Component } from 'react';
import axios from "axios";
import moment from "moment";
const localServer = "http://localhost:3001/api";
const liveServer = "https://clanwars-backend.herokuapp.com/api";
class Points extends Component {

  state = {
    Green: 0,
    Red: 0,
    Blue: 0,
    Yellow: 0,
    Time: 0
  }

  // this function is used in conjunction with the componentDidMount function to interact with the server
  updateInterval;

 // Get current time
  // getTime = () => {
  //   // this.setTime(Date.now().toString());
  //   this.setState({Time: moment().format("dddd, MMMM Do YYYY, h:mm a")});
  //   // console.log(`The time is ${this.state.Time}`);
  //   this.state.Time ? console.log(this.state.Time) : console.log("No time");
  // };

  addPoints = async (team, points) => {
    console.log(points);
    const numb = 12;
    console.log(numb);
    await axios.post(`${localServer}/${team}`, {points: parseInt(points)})
    // await axios.post(`${liveServer}/${team}` {points: parseInt(points)})
    .then((response) => {
      console.log(response.data)
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

  // Get the scores from the server
  // getScores = async () => {
  //   await axios.get(localServer)
  //   // await axios.get(liveServer)
  //   .then((response) => {
  //     console.log(response.data)
  //     this.setState({
  //       Green: response.data[0].points,
  //       Red: response.data[1].points,
  //       Blue: response.data[2].points,
  //       Yellow: response.data[3].points
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // };
 // ComponentDidMount is a React lifecycle method that runs when the component is first rendered
  // componentDidMount() {
  //   this.getScores();
  //   this.getTime();
  //   this.updateInterval = setInterval(() => {
  //     this.getScores();
  //     this.getTime();
  //   }, 60000);
  // }
  // componentWillUnmount is a React lifecycle method that runs when the component is unmounted
  // componentWillUnmount() {
  //   clearInterval(this.updateInterval);
  // };
  
  // This renders all of the HTML to the page
  render () {
    return (
      <section className="row text-center mx-0">
        <div className="col-lg-2 m-1">
          <div className="card">
            <div className="card-header">
              <h3>Green Goats</h3>
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
