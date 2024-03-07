import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import { getAllMovies } from "../api/api";
import MovieList from "../component/MovieList";

const MovieListData = () => {
  const movieListRef = useRef([]);
  const [movieList, setMovies] = useState([]);
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();


  useEffect(() => {
    getAllMovies().then((data) => {
        setMovies(data); 
        movieListRef.current = data
    })
  }, []);

  useEffect(() => {
    setMovies(newFiltersHandler);
  }, [sort,filter]);

  const newFiltersHandler = useMemo(() => {

    //created new copy of array
    let filteredMovie = [...movieListRef.current];
    
    if (filter == "date") {
      filteredMovie.sort((a, b) => a.released_date_timestamp - b.released_date_timestamp);
    } else if (filter == "rating") {
      filteredMovie.sort((a, b) => b.rating.localeCompare(a.rating));
    }

    if (sort == "atoz") {
      filteredMovie.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort == "ztoa") {
      filteredMovie.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (filter == "none" && sort == "none") {
      filteredMovie = movieListRef.current;
    }

    return filteredMovie

  },[sort,filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
 
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };


  return (
    <>
        <MovieList
          movieList={movieList}
          handleFilterChange={handleFilterChange}
          handleSortChange={handleSortChange}
        />
    </>

  );
};
export default MovieListData;
