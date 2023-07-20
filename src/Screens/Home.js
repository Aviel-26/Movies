import React, { useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import '../CSS/home.css'

//imports for SignOut button
import { UNSAFE_LocationContext, useLocation, useNavigate } from "react-router-dom"; 
import { auth } from "../FireBaseAuth/firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  console.log("Enter Home")
  
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  //Functions that call the API Movies with the name of the Movie
  const getMovie = (e) => {
    e.preventDefault();
    axios
      .get(`https://imdb-api.com/en/API/SearchMovie/{API_key}/${movieName}`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    navigate("/favorite" , {state: location.state })
  }

  return (
    <div>
      <div className="home">
      <div className="title"><h1>Hello, Search a movie</h1></div>
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
      </div>


      <div className="showlist">
      {/* <div> */}
      {movies.map((movie) => (
        <div className="size" key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            description={movie.description}
            image={movie.image}
            uid= {location.state}
          />
        </div>
      ))}

      </div>    
    </div>
  );
}
