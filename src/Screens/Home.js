import React, { useState } from "react";
import axios from "axios";
import Movie from "./Movie";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  const getMovie = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.themoviedb.org/3/authentication/${movieName}`)
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

  const handleMovieNameChange = (e) => {
    setMovieName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={getMovie}>
        <input
          id="txt"
          placeholder="type here.."
          value={movieName}
          onChange={handleMovieNameChange}
        />
        <button type="submit">Search 🔎</button>
      </form>

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
