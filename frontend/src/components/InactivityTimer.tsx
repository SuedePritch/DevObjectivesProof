import React from 'react';

declare global{
  export interface Window {
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

function startTimer(disconnectTimeout:number) {
  console.log(window.connected);
  let timerValue:number = 0;
  clearInterval(timer)
  timer = setInterval(() => {
    timerValue++
    console.log(timerValue)
    if(timerValue >= disconnectTimeout){
      disconnectSocket();
    }
  }, 1000)
}

function disconnectSocket() {
  window.connected = false;
  console.log(window.connected);
  clearInterval(timer)
  // console.log('disconnect the client socket')
}


window.addEventListener('blur', function() {
  startTimer(10)
  console.log("blur")
})

window.addEventListener('focus', function() {
  clearInterval(timer)
  console.log('focus')
})

function InactivityTimer(){
 
  return (
    <p className="text-light p-2" aria-label="hidden" id='inactivityTimer'></p>
  )
}

export default InactivityTimer