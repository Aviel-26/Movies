import React  from 'react'
import { useContext } from 'react';
import { listContext } from './Movie';
import { useNavigate } from 'react-router-dom';
import '../CSS/favorite.css'
import Movie from './Movie';

export default function Favorite() {

  const favorite = useContext(listContext);

  const navigate = useNavigate();

  return(
    <div>
    <div>
      <h1>Favorite</h1>
      <button className='back' onClick={() => navigate(-1)}>return Home</button> 
    </div>

    <div>
         {favorite.map((movie) => (
        <div key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            description={movie.description}
          />
        </div>
        ))}
     </div>
    
    </div>


  )
}
