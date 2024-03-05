import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { getAllMovies } from "../api/api";
import MovieList from "../component/MovieList";

const MovieListData = () => {
  const movieListRef = useRef([]);
  const sortRef = useRef("none");
  const filterRef = useRef("none");
  const [movieList, setMovies] = useState([]);
  const [movieLists, setMovieList] = useState([]);

  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();


  useEffect(() => {
    getAllMovies().then((data) => {
        setMovies(data); 
        movieListRef.current = data
    })
  }, []);

  const newFiltersHandler = () => {
    let filter = filterRef.current;
    let sort = sortRef.current;

    //created new copy of array
    let filteredMovie = [...movieListRef.current];
    
    if (filter == "date") {
      filteredMovie.sort(
        (a, b) => a.released_date_timestamp - b.released_date_timestamp
      );
      setMovies(filteredMovie);
    } else if (filter == "rating") {
      filteredMovie.sort((a, b) => b.rating.localeCompare(a.rating));
      setMovies(filteredMovie);
    }

    if (sort == "atoz") {
      filteredMovie.sort((a, b) => a.title.localeCompare(b.title));
      setMovies(filteredMovie);
    } else if (sort == "ztoa") {
      filteredMovie.sort((a, b) => b.title.localeCompare(a.title));
      setMovies(filteredMovie);
    }

    if (filter == "none" && sort == "none") {
      setMovies(movieListRef.current);
      
    }
  };

  const handleFilterChange = (e) => {
    if (e.target.value === "date") {
      filterRef.current = "date";
      setFilter("date");
    } else if (e.target.value === "rating") {
      filterRef.current = "rating";
      setFilter("rating");
    } else {
      filterRef.current = "none";
      setFilter("none");
    }

    newFiltersHandler();
  };

  const handleSortChange = (e) => {

    if (e.target.value === "atoz") {
      sortRef.current = "atoz";
      setSort("atoz");
    } else if (e.target.value === "ztoa") {
      sortRef.current = "ztoa";
      setSort("ztoa");
    } else {
      sortRef.current = "none";
      setSort("none");
    }
    newFiltersHandler();
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
