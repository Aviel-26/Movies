import { useState } from 'react';
import '../CSS/movie.css';
import { addDoc, collection} from 'firebase/firestore';
import {store} from '../FireBaseAuth/firebase'
import { Auth } from "firebase/auth";
import { useLocation } from 'react-router-dom';

export default function Movie(props) {


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const newMovie = {
          id: props.id,
          title: props.title,
          image : props.image,
          description: props.description
        };

        console.log(newMovie)

    try{
        // addDoc(collection, new document)
        await addDoc(collection(store, props.uid,), {
          id: newMovie.id, title: newMovie.title, image: newMovie.image ,description : newMovie.description
        })
        console.log("props uid " + props.uid)
    }catch(error){
        alert(error)
    }
  }

  return (
    <div id='movie'>
      <form onSubmit={handleSubmit}>
        <h2>{props.title}</h2>
        <img src={props.image} alt="pc" />
        <p>{props.description}</p>
        <button className='add' type='submit'>Add</button>
      </form>
    </div>
  );
}