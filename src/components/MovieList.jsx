import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import MovieCard from "./MovieCard";
import { getAllMovies } from "../data/api";

const MovieList = () => {
  const movieListRef = useRef([]);
  const sortRef = useRef("none");
  const filterRef = useRef("none");
  const [movieList, setMovies] = useState([]);

  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();

  const fetchMovies = useCallback(async () => {
    try {
      const list_movies = await getAllMovies();
      movieListRef.current = [...list_movies];
      setMovies(list_movies);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const newFiltersHandler = () =>{

    let filter = filterRef.current;
    let sort = sortRef.current;
    
    //created new copy of array 
    let filteredMovie = [...movieListRef.current]
    console.log("filter",filter);
    console.log("sort",sort);

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
        console.log("atoz",filteredMovie);
        setMovies(filteredMovie);
      } else if (sort == "ztoa") {
        console.log("zota",filteredMovie);
        filteredMovie.sort((a, b) => b.title.localeCompare(a.title));
        setMovies(filteredMovie);
      } 

    if (filter == "none" && sort == "none") {
        setMovies(movieListRef.current);
        console.log("filter",movieListRef.current)
      }
  }

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

    console.log("sort", e.target.value)
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            {/* Release date and Rating */}
            {/* <label> Filter Movie By </label> */}
            <div className="grid">
              <select
                className=" w-full px-3 py-1.5 border-2 border-white rounded-full"
                onChange={handleFilterChange}
              >
                <option selected value="none">
                  {" "}
                  Filter Movies By{" "}
                </option>
                <option value={"date"}> Release Date </option>
                <option value={"rating"}> Rating </option>
              </select>
              {/* <img src="/images/down-arrow.png" alt="" className="pointer-events-none row-start-1 col-start-1" width={15} height={15} /> */}
            </div>
          </div>

          {/* Alphabetical order and Reverse alphabetical order */}
          <div>
            {/* <label>Sort Result By</label> */}
            <select
              className=" w-full px-3 py-1.5 border-2 border-white rounded-full"
              onChange={handleSortChange}
            >
              <option selected value="none">
                {" "}
                Sort Result By{" "}
              </option>
              <option value="atoz"> {"A -> Z (Alphabetical Order)"}</option>
              <option value="ztoa">
                {" "}
                {"Z -> A (Reverse Alphabetical Order)"}{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="pt-8">
          <div className="grid grid-cols-3">{renderMovies()}</div>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
