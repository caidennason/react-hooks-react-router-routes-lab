import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
      {actors.map((actor, idx) => {
        return <div key={idx}> Name: {actor.name}
        <ul>Movies: 
          {actor.movies.map((movie, idx) => {
          return <li key={idx}>{movie}</li>
        })} </ul>
        </div>
      })}
  </div>;
}

export default Actors;