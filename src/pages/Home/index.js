import React from 'react';
import axios from "axios";

class Home extends React.Component {

  state = {
    Scores : {
      Red: 0,
      Blue: 0,
      Yellow: 0,
      Green: 0
    }
  }

  wakeServer = () => {
    axios.get("https://clanwarserver.herokuapp.com/api/wake") 
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  
  getScores = () => {
    axios.get("https://clanwarserver.herokuapp.com/api")
    .then((data) => console.log(data))
    // .then((scores) => response.json())
    .catch((err) => {
      console.log(err)
    })
  }

	async componentDidMount() {
     await this.wakeServer()
     setInterval(this.getScores(), 600)
  }

  render() {
  return (
    <section className="my-5 text-center">
      <div className="my-2">
        <h1>Here are the scores:</h1>
        <ul>
          <li className='bg-success'>Green has: </li>
          <li className='bg-danger'>Red has: </li>
          <li className='bg-primary'>Blue has: </li>
          <li className='bg-warning'>Yellow has: </li>
        </ul>
      </div>
    </section>
  );
  }
}

export default Home;
