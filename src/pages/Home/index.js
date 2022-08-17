import React, { useState } from 'react';
import axios from "axios";

function Home() {

  // state = {
  //   Green: 0,
  //   Red: 0,
  //   Blue: 0,
  //   Yellow: 0
  // }

  const [Green, setGreen] = useState(0);
  const [Red, setRed] = useState(0);
  const [Blue, setBlue] = useState(0);
  const [Yellow, setYellow] = useState(0)

  // const wakeServer = () => {
  //   axios.get("https://clanwarserver.herokuapp.com/api/wake") 
  //   .then(response => console.log(response.data))
  //   .catch(err => console.log(err));
  // };

  
  const getScores = () => {
    axios.get("https://clanwarserver.herokuapp.com/api")
    .then((response) => {
      console.log(response.data)
      // this.setState({
      //   Green: response.data[0].points,
      //   Red: response.data[1].points,
      //   Blue: response.data[2].points,
      //   Yellow: response.data[3].points
      // })
      setGreen(response.data[0].points);
      setRed(response.data[1].points);
      setBlue(response.data[2].points);
      setYellow(response.data[3].points);
    })
    .catch((err) => {
      console.log(err)
    })
  };

getScores()

  return (
    <section className="my-5 text-center">
      <div className="my-2">
        <h1>Here are the scores:</h1>
        <ul>
          <li className='bg-success'>Green has: {Green}</li>
          <li className='bg-danger'>Red has: {Red}</li>
          <li className='bg-primary'>Blue has: {Blue}</li>
          <li className='bg-warning'>Yellow has: {Yellow}</li>
        </ul>
      </div>
    </section>
  );
  }

export default Home;
