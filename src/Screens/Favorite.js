import React, { useEffect }  from 'react'
import { useLocation ,useNavigate } from 'react-router-dom';
import '../CSS/favorite.css'
import Movie from './Movie';
import {store} from '../FireBaseAuth/firebase'
import { collection, deleteDoc, doc, documentId, getDoc, getDocs } from 'firebase/firestore'
import { useState } from 'react';
import { auth } from '../FireBaseAuth/firebase';
import { signOut } from 'firebase/auth';


export default function Favorite() {
  console.log("Enter Favorite")
  
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
      },[])

      
    const handleDelete = async(movie) => {

      const movieDocRef = doc(store, location.state, movie.id)
      console.log("documentId that will be deleted: " + movie.id)

      try{
        await deleteDoc(movieDocRef)
        console.log("delete  " + movieDocRef + " success " )
        window.location.reload(); // Reload the page
      }
      catch(error){ console.log("deleted " + movieDocRef + " failed")}
    }
    
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

  const navigate = useNavigate();
  
  return(
    <div>
    <div className='title-fav'>
      <h1>Favorite</h1>
      <button className='back' onClick={() => navigate(-1)}>return Home</button>
      <button className='signOut' onClick={handleSingout} >Sign Out</button> 
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
          <button className='delete' onClick={() => handleDelete(movie)}>delete</button>
        </div>
        ))}
     </div>    
    </div>
  )
}


