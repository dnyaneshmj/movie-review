import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import MovieCard from "./MovieCard";
import FilterContainer from "./FilterContainer";

const MovieList = ({ movieList, handleFilterChange, handleSortChange }) => {

  const [movies, setMovies] = useState([]) 
  useEffect(() =>{
    setMovies(movieList)
  },[movieList])
  

  const renderMovies = () => { 
    return movieList.map((movie) => (
      <MovieCard
        key={movie.title}
        title={movie.title}
        poster={movie.poster}
        released_date={movie.released_date}
        rating={movie.rating}
      />
    ));
  };

  return (
    <div className="h-screen w-full relative bg-black overflow-y-auto">
      <div className="w-11/12 mx-auto text-center my-20">
        <h1 className="text-2xl">Latest Movie Reviews</h1>
        {/* Filter UI */}
        <FilterContainer handleFilterChange={handleFilterChange} handleSortChange={handleSortChange} />
        {/* Movies List */}
        <div className="pt-8">
          <div className="grid grid-cols-3">
            {renderMovies()}
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
