import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBaseAuth/firebase';
import {useNavigate} from 'react-router-dom';



const SignupPage = () => {

  const navigate = useNavigate();

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const singup = async (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,Email,password)
    .then((userCredential) => {
      console.log(userCredential);
      navigate('/')
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleLogin =() =>{
    navigate('/')
  }

  return (
    <div className='login'>
    <h2 className=' HeadSup'>Create Account</h2>
    <form onSubmit={singup}>
    <ul className='list'>
      <li><input className='in' type="text" id="username" placeholder='Email' value={Email} onChange={handleEmailChange}/></li>
      <li><input className='in' type="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange}/></li>
      
    <li><button className='btnSend' on>send</button></li>
    </ul>
    </form>
   <button className='btnLog' onClick={handleLogin}>Login</button>
    
  </div>
  );
};

export default SignupPage;

