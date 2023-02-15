import React from 'react'
import { useSelector} from 'react-redux';
import { State }  from './redux/reducers'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import InactivityTimer from './components/InactivityTimer';
import Login from './components/Login'
import Signup from './components/Signup'

// Dev
// export const API_URL = "http://localhost:8080"
// Prod
export const API_URL = "https://dev-objectives-proof.vercel.app"

function App() {
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
        <InactivityTimer timeout={6}/>
        <Login/>
        <Signup/>
        </>
        }
    </div>
  );
}

export default App;
