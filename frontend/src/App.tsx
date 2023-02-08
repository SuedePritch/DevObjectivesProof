import React from 'react';
import { useSelector} from 'react-redux';
import { State }  from './redux/reducers'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login'
import Signup from './components/Signup'
// let url;
// if (process.env.ENVIROMENT === "development") {
//   url = "http://localhost:8080";
// } else if (process.env.ENVIROMENT === "production") {
//   url = "https://dev-objectives-proof.vercel.app";
// }
export const API_URL = "http://localhost:8080"

let inactivityTimer:any;
export let inactivityTimerMinutes:number = 0;
let isTimerRunning = false
function startInactivityTimer() {
  //update every minute
  inactivityTimer = setInterval(function () {
    inactivityTimerMinutes++;
    console.log(`${inactivityTimerMinutes} minutes`);
    //if one hour of inactivity disconnect from socket and stop timer
    if (inactivityTimerMinutes >= 60) {
      console.log("disconnected from socket due to inactivity");
      resetTimer();
    }
  }, 6000);
}
function resetTimer() {
  clearInterval(inactivityTimer);
  isTimerRunning = false;
}
//
//Resets the timer
//
//Change browser tab or application
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    inactivityTimerMinutes = 0;
  }
});
//if user clicks on window/tab
window.onfocus = function () {
  inactivityTimerMinutes = 0;
};
// if user clicks mouse on window
document.onclick = function () {
  inactivityTimerMinutes = 0;
};
// if user scrolls on window
document.onscroll = function () {
  inactivityTimerMinutes = 0;
};
//if user touches screen on mobile
document.ontouchmove = function () {
  inactivityTimerMinutes = 0;
};


function App() {
  if(!isTimerRunning){
    startInactivityTimer();
    isTimerRunning = true;
  }
  
  let user;
  const getstate = useSelector((state: State) => state.user);
  if(getstate._id.length > 0){
    user = getstate
  }
 
  
  return (
    <div className="App bg-dark">
        {user? <p id='username'>{user.username}</p>: 
        <>
        <Login/>
        <Signup/>
        </>
        }
    </div>
  );
}

export default App;
