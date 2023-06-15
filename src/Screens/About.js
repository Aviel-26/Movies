import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import {auth} from '../FireBaseAuth/firebase';
import { signOut  } from 'firebase/auth';
import '../CSS/about.css';

export default function About() {
  
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.state);
    // const [data, setData] =useState();
    // setData(location.state)
    // console.log( data  + "  Data")

    const handleSingout =(event) => {
      event.preventDefault();
      signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
    }



    const handleHome =() => {
    navigate('/Home' ,{state: location.state })
  }
  
  
  
  return (
    <div className='about'>

      <h1> About us: </h1>

      <p> hello </p>
       <p>we are Gal & Aviel</p>
       <p> student at Ariel Universirty and this is one of our projects is react.
        hope you will enjoy and learn from this web.</p>
        
      <p>Gal: gal@gmail.com</p>
      <p> Aviel : Aviel@gmail.com</p>

      
      <button className='btnLog' onClick={handleHome}>Home</button>
      <button className='btnLogout-about' onClick={handleSingout}>Singout</button>
    </div>
  );
};


