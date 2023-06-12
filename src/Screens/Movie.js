import React, { useState } from 'react'
// context.js
import { createContext } from 'react';
export const Context = createContext('Default Value');
export default function Movie(props) {
  
    const [favorite, setFavorites] =useState([]);
    
    const addMovie = (props) => {
        const newObject = {id: props.id, img: props.img, title: props.title };
        
        setFavorites((prevArray) => [...prevArray, newObject]);
        Context = createContext(favorite)
        
    };
    return (
    
    <div className='movie'>

        <h2> {props.title}</h2>
        <img src={props.image} alt="pc"></img>
        <p>{props.description}</p>
        <button onClick={addMovie(props)}>add</button>

    </div>
  )
}
