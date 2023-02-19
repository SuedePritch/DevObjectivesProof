import React, { useState, useEffect } from 'react';

interface TimerProps{
    timeout: number
}

declare global{
  interface Window {
    connected: boolean
  }
}


// the user loads the page
// when they navigate away from the tab
// we start a timer
// after a certain amount of time has passed
// we disconnect the client socket


window.connected = true;

let timer :  NodeJS.Timeout

function disconnectSocket() {
  window.connected = false;
  console.log('time to disconnect the client socket')
  // we need to know how long the timer has been running for
}

function startTimer() {
  clearInterval(timer)
  timer = setTimeout(disconnectSocket, 5000) // threshold will likely be 30 seconds
}

window.addEventListener('blur', function() {
  startTimer()
  console.log('blur')
})

window.addEventListener('focus', function() {
  clearInterval(timer)
  console.log('focus')
})









function InactivityTimer({timeout}:TimerProps){
  const [timer, setTimer] = useState<number>(0)
  useEffect(()=>{
    const inactivityTimer = setInterval(()=>{
        setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    if(timer >= timeout){
      clearInterval(inactivityTimer)
      console.log("disconnected from socket due to inactivity")
    }
    return () => clearInterval(inactivityTimer)
  }, [timer, timeout])
  
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
  return (
    <p className="text-light p-2" aria-label="hidden" id='inactivityTimer'>{timer}</p>
  )
}

export default InactivityTimer