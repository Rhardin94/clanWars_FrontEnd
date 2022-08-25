// Needed packages
import React, { Component } from 'react';
import axios from "axios";
import moment from "moment";
const localServer = "http://localhost:3001/api";
const liveServer = "https://clanwars-backend.herokuapp.com/api";
class Home extends Component {

  state = {
    Green: 0,
    Red: 0,
    Blue: 0,
    Yellow: 0,
    Time: 0
  }

  // this function is used in conjunction with the componentDidMount function to interact with the server
  updateInterval;

 // This function is used to wake the server up so that it doesn't go to sleep
  wakeServer = async () => {
    // await axios.get(`${localServer}/wake`)
    await axios.get(`${liveServer}/wake`) 
    .then(response => console.log(response.data))
    .catch(err => console.log(err));
  };

 // Get current time
  getTime = () => {
    // this.setTime(Date.now().toString());
    this.setState({Time: moment().format("dddd, MMMM Do YYYY, h:mm a")});
    // console.log(`The time is ${this.state.Time}`);
    // this.state.Time ? console.log(this.state.Time) : console.log("No time");
  };

  // Get the scores from the server
  getScores = async () => {
    // await axios.get(localServer)
    await axios.get(liveServer)
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
 // ComponentDidMount is a React lifecycle method that runs when the component is first rendered
  componentDidMount() {
    this.wakeServer();
    this.getScores();
    this.getTime();
    this.updateInterval = setInterval(() => {
      this.wakeServer();
      this.getScores();
      this.getTime();
    }, 60000);
  }
  // componentWillUnmount is a React lifecycle method that runs when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  };
  
  // This renders all of the HTML to the page
  render () {
    return (
      <section className="my-5 text-center">
      <div className="row">
          <h1>These are the scores as of: {this.state.Time}</h1>
          <h1 className='bg-success col-lg-3'>Green: {this.state.Green}</h1>
          <h1 className='bg-danger col-lg-3'>Red: {this.state.Red}</h1>
          <h1 className='bg-primary col-lg-3'>Blue: {this.state.Blue}</h1>
          <h1 className='bg-warning col-lg-3'>Yellow: {this.state.Yellow}</h1>
        </div>
      </section>
    )
    }
}
export default Home;
