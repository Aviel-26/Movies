import React, { useState } from 'react';
import '../CSS/movie.css';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { store } from '../FireBaseAuth/firebase';

export default function Movie(props) {
  const [imageUrl, setImageUrl] = useState(
    `https://image.tmdb.org/t/p/w500${props.image}`
  );

  const handleAdd = async (e) => {
    e.preventDefault();

    const newMovie = {
      id: props.id,
      title: props.title,
      image: imageUrl,
      overview: props.overview,
    };

    try {
      await addDoc(collection(store, props.uid), {
        id: newMovie.id,
        title: newMovie.title,
        image: newMovie.image,
        overview: newMovie.overview,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id='movie'>
<<<<<<< HEAD
    <h2>{props.title}</h2>
    <img src={imageUrl} alt='pc' />
    <p>{props.overview}</p>
    {props.button === 'Add' && (
      <button className='add' type='submit' onClick={handleAdd}>{props.button}</button>
    )}
    {props.button === 'Delete' && (
      <button className='delete' onClick={props.handleDelete}>{props.button}</button>
    )}
  </div>
=======
      <form onSubmit={handleSubmit}>
        <h2 className='title-movie'>{props.title}</h2>
        <img src={props.image} alt="pc" />
        <p className='desc-movie'>{props.description}</p>
        <button className='add' type='submit'>Add</button>
      </form>
    </div>
>>>>>>> e64bc8f3d34194f0a46c6158564679b9c2dd6849
  );
}
