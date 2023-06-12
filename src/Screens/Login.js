import React, { useState } from 'react';
import '../CSS/login.css';
import {auth} from '../FireBaseAuth/firebase'
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginPage = () => {

  const navigate = useNavigate();

 const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /// Nevigate to Singup
  const handleSignup =() =>{
    navigate('/Singup' )
  }

  const login = async (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,Email,password)
    .then((userCredential) => {
      console.log(userCredential);
      navigate('/About' )
    }).catch((error) => {
      console.log(error);
      
    });
  };

  return (
    <div className='login'>
      <h2 className=' head'>Login</h2>
      <form onSubmit={login}>
      <ul className='list'>
        <li><input className='in' type="text" id="username" placeholder='Email' value={Email} onChange={handleEmailChange}/></li>
        <li><input className='in' type="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange}/></li>
        <li>
        <button className='btn'>Login</button>
        </li>
      </ul>
      </form>
      <button className='btnSout' onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default LoginPage;
