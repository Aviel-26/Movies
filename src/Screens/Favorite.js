import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/favorite.css';
import Movie from './Movie';
import { store } from '../FireBaseAuth/firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

export default function Favorite() {
  const location = useLocation();
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const getDB = async (db) => {
      const FavoriteCol = collection(db, location.state); 
      const FavoriteSnapshot = await getDocs(FavoriteCol);

      const favoriteList = FavoriteSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setFavorite(favoriteList);
    };
    getDB(store);
  }, [location.state]);

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
          ))}
      </div>
    </div>
  );
}
