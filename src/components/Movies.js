import React from "react";
import { movies } from "../data";

function Movies() {

  const key= movies.map((movie) => movie.title)
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, idx) => {
      return(
        <div key={idx}> {movie.title} 
        <ul> Time:{movie.time} </ul>
          Genre: 
            {movie.genres.map((genre, idx) => {
            return <li key={idx}>{genre}</li>
          })}
        </div>
        )
    })}
    </div>;
}

export default Movies;
