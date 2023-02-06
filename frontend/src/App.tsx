import React from 'react';
// import store from './redux/store'
// import { setUser } from './redux/actions';
import { useSelector} from 'react-redux';
import { State }  from './redux/reducers'
// import {USER} from './types/User.types'
// import axios from 'axios'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './components/Login'
import Signup from './components/Signup'


export const API_URL = "http://localhost:8080"

function App() {
  let user;
  const getstate = useSelector((state: State) => state.user);
  if(getstate._id.length > 0){
    user = getstate
  }
  console.log(user);
 
  
  return (
    <div className="App bg-dark">
        <Login/>
        <Signup/>
    </div>
  );
}

export default App;
