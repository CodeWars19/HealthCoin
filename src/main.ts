import './style.css'
import { setupCounter } from './counter.ts'
import { login } from './login.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p id="title"> Health Coin </p>
    <p id="body"> Your personal health companion! <br> </p>
    <img src="https://www.svgrepo.com/show/324605/healthy-mentality-strong-health-wellness-happy-healthcare.svg" alt="health" width="500" height="500">
    <p id="body">
    Say goodbye to tedious calorie counting and hello to effortless tracking with just a snap.
     Simply take a selfie of your meal to start the calorie counting process! It's fun, it's easy,
      and it keeps you on track towards your healthy eating goals. 
      Download now and start snapping your way to a healthier you! </p>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="login" type="button"></button>
    </div>
    <p id="footer"> Property of Sid and Atharva 2024</p>
  </div>
`
login(document.querySelector<HTMLButtonElement>('#login')!)
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
