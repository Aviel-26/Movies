import React, { useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "../CSS/home.css";
import apiKey from '../FireBaseAuth/API.js';

//imports for SignOut button
import { UNSAFE_LocationContext, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../FireBaseAuth/firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const getMovie = (e) => {
    e.preventDefault();

    const Key = apiKey; 
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${movieName}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSingout = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMovieNameChange = (e) => {
    setMovieName(e.target.value);
  };

  const goToFavorite = () => {
    navigate("/favorite", { state: location.state });
  };

  return (
    <div>
      <div className="home">
        <div className="title">
          <h1>Search a movie</h1>
        </div>
        <form onSubmit={getMovie}>
          <input className="in" id="txt" placeholder="type here.." value={movieName} onChange={handleMovieNameChange} />
          <button type="submit" className="searchBTN">Search 🔎</button>
        </form>

        <button className="fav" type="text" onClick={goToFavorite}>Favorite</button>
        <button className="btnLogout-home" type="text" onClick={handleSingout}>Sign Out</button>
      </div>

      <div className="showlist">
        {movies.map((movie) => (
          <div className="size" key={movie.id}>
            <Movie
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              image={movie.poster_path}
              uid={location.state}
              button={'Add'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
