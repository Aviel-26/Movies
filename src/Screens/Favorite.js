import React, { useEffect }  from 'react'
import { useLocation ,useNavigate } from 'react-router-dom';
import '../CSS/favorite.css'
import Movie from './Movie';
import {store, app} from '../FireBaseAuth/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react';


export default function Favorite() {
  
  const location = useLocation();


  const [favorite, setFavorite] = useState([]);
  
  useEffect( ()=>{

    const getDB = async (db) => {
        // collection() - return all the collection for that path. 
         const FavoriteCol = collection(db, location.state);
         // getDocs() - return all documents for our collection
         const FavoriteSnapshot = await getDocs(FavoriteCol);
        
         const favoriteList = await FavoriteSnapshot.docs.map(doc =>(
          {
              id: doc.id, 
              // Retrieves all fields in the document as an object
              data: doc.data()
          }
      ))
      setFavorite(favoriteList)
        }
       // call the function: 
       getDB(store);
      },[favorite])
  

  const navigate = useNavigate();
  

  return(
    <div>
    <div>
      <h1>Favorite</h1>
      <button className='back' onClick={() => navigate(-1)}>return Home</button> 
    </div>

    <div className="showlist">
         {favorite.length>0 && favorite.map((movie) => (
        <div key={movie.id}>
          <Movie
            id={movie.data.id}
            title={movie.data.title}
            description={movie.data.description}
            image={movie.data.image}
          />
        </div>
        ))}
     </div>

            <Movie
            id={"123445"}
            title={"Dragon-Ball-Z"}
            description={"nice movie"}
            image={"https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_Ratio0.6757_AL_.jpg"}
          />



    
    </div>


  )
}
