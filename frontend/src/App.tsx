import React from 'react'
import { useSelector} from 'react-redux';
import { State }  from './redux/reducers'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import InactivityTimer from './components/InactivityTimer';
import Class from './components/Class'
import Voca from './components/Voca';
import Login from './components/Login'
import Signup from './components/Signup'
import DateFns from './components/DateFns';

// Dev
// export const API_URL = "http://localhost:8080"
// Prod
export const API_URL = "https://dev-objectives-proof.vercel.app"

const App: React.FC = () => {
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
        {/* <InactivityTimer/> */}
        <Class message="This is the message from the Class Component"/>
        <Voca/>
        <DateFns/>
        <Login/>
        <Signup/>
        </>
        }
    </div>
  );
}

export default App;
