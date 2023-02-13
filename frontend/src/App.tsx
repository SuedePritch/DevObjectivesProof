import React from 'react';
import { useSelector} from 'react-redux';
import { State }  from './redux/reducers'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login'
import Signup from './components/Signup'

// Dev
// export const API_URL = "http://localhost:8080"
// Prod
export const API_URL = "https://dev-objectives-proof.vercel.app"
export let timerState = {
  inactivityTimer: undefined as NodeJS.Timer | undefined,
  inactivityTimerMinutes: 0 as number,
};

export function startInactivityTimer() {
  //update every minute
    timerState.inactivityTimer = setInterval(function () {
      timerState.inactivityTimerMinutes++;
      console.log(`${timerState.inactivityTimerMinutes} minutes`);
      //if one hour of inactivity disconnect from socket and stop timer
      if (timerState.inactivityTimerMinutes >= 60) {
        console.log("disconnected from socket due to inactivity");
        resetTimer();
      }
    }, 60000);
}

export function resetTimer() {
  clearInterval(timerState.inactivityTimer);
  timerState.inactivityTimerMinutes = 0;
}

export function startInactivityTimerFromZero(){
  resetTimer();
  startInactivityTimer();
}

//Resets the timer
//Change browser tab or application
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    startInactivityTimerFromZero();
  }
});
//if user clicks on window/tab
window.onfocus = function () {
  startInactivityTimerFromZero();
};
// if user clicks mouse on window
document.onclick = function () {
  startInactivityTimerFromZero();
};
// if user scrolls on window
document.onscroll = function () {
  startInactivityTimerFromZero();
};
//if user touches screen on mobile
document.ontouchmove = function () {
  startInactivityTimerFromZero();
};


function App() {
  
  let user;
  const getState = useSelector((state: State) => state.user);
  if(getState._id.length > 0){
    user = getState
  }
  
  
  resetTimer();
  startInactivityTimer();
  return (
    <div className="App bg-dark" id='App'>
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
