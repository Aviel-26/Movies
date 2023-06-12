import React, { useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import '../CSS/home.css'

//imports for SignOut button
import { useNavigate } from "react-router-dom"; 
import { auth } from "../FireBaseAuth/firebase";
import { getAuth, signOut } from "firebase/auth";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();

  const getMovie = (e) => {
    e.preventDefault();
    axios
      .get(`https://imdb-api.com/en/API/SearchMovie/k_a1pmh7vm/${movieName}`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };


// 1)  https://imdb-api.com/en/API/SearchMovie/k_a1pmh7vm/${movieName}`) Before
//  2)  https://imdb-api.com/en/API/SearchTitle/k_12345678/leon the professional

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

  const handleMovieNameChange = (e) => {
    setMovieName(e.target.value);
  };

  const goToFaorite = () => {
    navigate("/favorite")
  }

  return (
    <div className="home">
      <div className="title"><h1>Hello firstName, Search a movie</h1></div>
      <form onSubmit={getMovie}>
        <input className="in"
          id="txt"
          placeholder="type here.."
          value={movieName}
          onChange={handleMovieNameChange}
        />
        <button type="submit">Search 🔎</button>
      </form>
      <button className="fav" type="text" onClick={goToFaorite}>Favorit Movie</button>
      <button className="btnLogout-home" type="text" onClick={handleSingout}>Sign Out</button>
      

      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}

      {movies.map((movie) => (
        <div key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            description={movie.description}
          />
        </div>
      ))}
    </div>
  );
}
