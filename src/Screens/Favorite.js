import React from 'react'
import { useContext } from 'react';
import { Context } from './Movie';

export default function Favorite(props) {
   
    const value = useContext(Context);
  
    return (
    <div>
        
        {value.map((movie) => (
        <div key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            description={movie.description}
          />
        </div>
        
      ))}



    </div>
  )
}
