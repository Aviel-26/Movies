import { useState } from 'react';
import '../CSS/movie.css';
import { addDoc, collection} from 'firebase/firestore';
import {store} from '../FireBaseAuth/firebase'
import { Auth } from "firebase/auth";

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
        await addDoc(collection(store, 'favorites',), {
          id: newMovie.id, title: newMovie.title, image: newMovie.image ,description : newMovie.description
        })
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