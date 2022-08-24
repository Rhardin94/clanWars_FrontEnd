import React, { Component } from 'react';
import axios from "axios";
import moment from "moment";

class Home extends Component {

  state = {
    Green: 0,
    Red: 0,
    Blue: 0,
    Yellow: 0,
    Time: 0
  }

  // const [Green, setGreen] = useState(0);
  // const [Red, setRed] = useState(0);
  // const [Blue, setBlue] = useState(0);
  // const [Yellow, setYellow] = useState(0)
  // const [time, setTime] = useState("");

  updateInterval;

  wakeServer = () => {
    axios.get("https://clanwarserver.herokuapp.com/api/wake") 
    .then(response => console.log(response.data))
    .catch(err => console.log(err));
  };

  getTime = () => {
    // this.setTime(Date.now().toString());
    this.setState({Time: moment().format("dddd, MMMM Do YYYY, h:mm a")});
    console.log(`The time is ${this.state.Time}`);
  };

  
  getScores = () => {
    axios.get("https://clanwarserver.herokuapp.com/api")
    .then((response) => {
      // console.log(response.data)
      this.setState({
        Green: response.data[0].points,
        Red: response.data[1].points,
        Blue: response.data[2].points,
        Yellow: response.data[3].points
      })
      // setGreen(response.data[0].points);
      // setRed(response.data[1].points);
      // setBlue(response.data[2].points);
      // setYellow(response.data[3].points);

    })
    .catch((err) => {
      console.log(err)
    })
  };
  
  componentDidMount() {
    this.getTime();
    this.updateInterval = setInterval(() => {
      this.wakeServer();
      this.getScores();
      this.getTime();
    }, 60000);
  }
  
  render () {
    return (
      <section className="my-5 text-center">
        <div className="my-2">
          <h1>Here are the scores as of {this.state.Time}:</h1>
          <ul>
            <li className='bg-success text-bold'>Green has: {this.state.Green}</li>
            <li className='bg-danger'>Red has: {this.state.Red}</li>
            <li className='bg-primary'>Blue has: {this.state.Blue}</li>
            <li className='bg-warning'>Yellow has: {this.state.Yellow}</li>
          </ul>
        </div>
      </section>
    )
    }
}
export default Home;
