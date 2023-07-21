import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/favorite.css';
import Movie from './Movie';
<<<<<<< HEAD
import { store } from '../FireBaseAuth/firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
=======
import {store} from '../FireBaseAuth/firebase'
import { collection, deleteDoc, doc, documentId, getDoc, getDocs } from 'firebase/firestore'
import { useState } from 'react';
import { auth } from '../FireBaseAuth/firebase';
import { signOut } from 'firebase/auth';

>>>>>>> e64bc8f3d34194f0a46c6158564679b9c2dd6849

export default function Favorite() {

  const location = useLocation();
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const getDB = async (db) => {
      const FavoriteCol = collection(db, location.state); // Make sure location.state is the correct collection name
      const FavoriteSnapshot = await getDocs(FavoriteCol);

      const favoriteList = await FavoriteSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setFavorite(favoriteList);
    };
    getDB(store);
  }, [location.state]);

<<<<<<< HEAD
  const handleDelete = async (movie) => {
    const movieDocRef = doc(store, location.state, movie.id);
    try {
      await deleteDoc(movieDocRef);
      console.log('Delete ' + movieDocRef + ' success');
      const updatedFavorites = favorite.filter((item) => item.id !== movie.id);
      setFavorite(updatedFavorites);
    } catch (error) {
      console.log('Delete ' + movieDocRef + ' failed');
    }
  };

  const navigate = useNavigate();

  return (
    <div className="favorite">
    <h1>Favorite</h1>
    <button className="back" onClick={() => navigate(-1)}>
      Return Home
    </button>

    <div className="showlist">
      {favorite.length > 0 &&
        favorite.map((movie) => (
          <div key={movie.id}>
            <Movie
              id={movie.data.id}
              title={movie.data.title}
              overview={movie.data.overview}
              image={movie.data.image}
              button={'Delete'}
              handleDelete={() => handleDelete(movie)} 
            />
          </div>
=======
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
>>>>>>> e64bc8f3d34194f0a46c6158564679b9c2dd6849
        ))}
    </div>
  </div>
  );
}
