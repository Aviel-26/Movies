
import React, { useState, createContext } from 'react';
import '../CSS/movie.css';

export const listContext = createContext([]);

export default function Movie(props) {
  const [favorite, setFavorites] = useState([]);

  const addMovie = (event) => {
    event.preventDefault();
    
    const newMovie = {
      id: props.id,
      title: props.title,
      description: props.description
    };
    setFavorites((prevArray) => [...prevArray, newMovie]);
    props.onAddMovie(newMovie); // Call the function passed as prop
    
  };

  return (
    <div id='movie'>
      <form onSubmit={addMovie}>
        <h2>{props.title}</h2>
        <img src={props.img} alt="pc" />
        <p>{props.description}</p>
        <button className='add' type='submit'>Add</button>
      </form>
    </div>
  );
}