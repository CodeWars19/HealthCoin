import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div>
      <p id="title"> Health Coin </p>
      <p id="body"> Your personal health companion! <br></br></p>
      <img src="https://www.svgrepo.com/show/324605/healthy-mentality-strong-health-wellness-happy-healthcare.svg" alt="health" width="500" height="500"></img>
      <p id="body">
      Say goodbye to tedious calorie counting and hello to effortless tracking with just a snap.
       Simply take a selfie of your meal to start the calorie counting process! It's fun, it's easy,
        and it keeps you on track towards your healthy eating goals. 
        Download now and start snapping your way to a healthier you! </p>
      <button id="signin" type="button">Get Started</button>
      <br></br><br></br>
      <button id="login" type="button">Log In</button>
      <p id="footer"> Property of Sid and Atharva 2024</p>
    </div>
    </>
  )
}

export default App
