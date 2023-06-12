import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, Prompt} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import About from './Screens/About'
import Signup from './Screens/Singup'
import Login from './Screens/Login'
import Home from './Screens/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Singup' element={<Signup/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Home' element={<Home/>}/>


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
