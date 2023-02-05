import React from 'react';
// import store from './redux/store'
// import { setUser } from './redux/actions';
// import { useSelector, useDispatch } from 'react-redux';
// import { State }  from './redux/reducers'
// import {USER} from './types/User.types'
// import axios from 'axios'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './components/Login'


export const API_URL = "http://localhost:8080"

function App() {
  // const user = useSelector((state: State) => state.user);
  // const dispatch = useDispatch();

  // const logStore = () =>{
  //   const currentState = store.getState()
  //   console.log(currentState)
  // }
  
  // const updateUser = async () =>{
  //   try{
  //     const response = await axios.get("http://localhost:8080/api/user/63cc291c978fffe40b64e3e9");
  //     const newUser:USER = response.data
  //     console.log(newUser);
  //     dispatch(setUser(newUser))
  //   }catch(err){
  //     alert(err)
  //   }
  // }
 
  
  return (
    <div className="App">
        {/* <h1 className="user-list-item">{user.username}</h1>
        <button onClick={logStore}>log store</button>
        <button onClick={updateUser}>setUser</button> */}
        <Login/>
    </div>
  );
}

export default App;
