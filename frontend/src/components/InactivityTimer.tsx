import React, { useState, useEffect } from 'react';

interface TimerProps{
    timeout: number
}

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
    <p className="text-light p-2" id='inactivityTimer'>{timer}</p>
  )
}

export default InactivityTimer