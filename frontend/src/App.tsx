import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { State }  from './redux/reducers'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from './components/Login'
// import Signup from './components/Signup'

// Dev
// export const API_URL = "http://localhost:8080"
// Prod
export const API_URL = "https://dev-objectives-proof.vercel.app"



function App() {

  const [timer, setTimer] = useState<number>(0)
  useEffect(()=>{
    const inactivityTimer = setInterval(()=>{
        setTimer(prevTimer => prevTimer + 1)
    }, 60000)
    if(timer >=60){
      clearInterval(inactivityTimer)
      console.log("disconnected from socket due to inactivity")
    }
    return () => clearInterval(inactivityTimer)
  }, [timer])
  
  function resetTimer() {
    setTimer(0)
  }


  //Resets the timer
  //Change browser tab or application
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      resetTimer()
    }
  });
  //if user clicks on window/tab
  window.onfocus = function () {
    resetTimer()
  };
  // if user clicks mouse on window
  document.onclick = function () {
    resetTimer()
  };
  // if user scrolls on window
  document.onscroll = function () {
    resetTimer()
  };
  //if user touches screen on mobile
  document.ontouchmove = function () {
    resetTimer()
  };


  let user;
  const getState = useSelector((state: State) => state.user);
  if(getState._id.length > 0){
    user = getState
  }
  
  
  // startInactivityTimer();
  return (
    <div className="App bg-dark" id='App'>
        {user? <p id='username'>{user.username}</p>: 
        <>
        <h1 className="text-light p-2" id='inactivityTimer'>{timer}</h1>
        {/* <Login/>
        <Signup/> */}
        </>
        }
    </div>
  );
}

export default App;
