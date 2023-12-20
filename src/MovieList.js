import React from 'react';
import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
        {movies.map((movies)=>
        (<MovieCard {...movies}/>))}
    </div>
  )
}

export default MovieList;