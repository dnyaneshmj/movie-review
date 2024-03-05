import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import MovieCard from "./MovieCard";
import { getAllMovies } from "../data/api";

const MovieList = () => {
  const movieListRef = useRef();
  const sortRef = useRef("none");
  const filterRef = useRef("none");
  const [movieList, setMovies] = useState([]);
  const [sort, setSort] = useState([]);
  const [filter, setFilter] = useState([]);

  const fetchMovies = useCallback(async () => {
    try {
      const list_movies = await getAllMovies();
      setMovies(list_movies);
      movieListRef.current = [...list_movies];
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  // Fast & Furious 6
  // Fast Five
  // The Fast and the Furious
  // The Fast and the Furious: Tokyo Drift
  // Fast Times at Ridgemont High
  // Fast X
  // Fast & Furious Presents: Hobbs & Shaw
  // Fast & Furious

  const filterHandler = () =>{
    let filter = filterRef.current;
    let filteredMovie = [...movieList]
    if (filter == "date"){
        movieList.sort((a, b) => a.released_date_timestamp - b.released_date_timestamp);
        setMovies(movieList);
    }else if (filter == "rating"){
        movieList.sort((a, b) => b.rating.localeCompare(a.rating));
        setMovies(movieList);
    }else if (filter == "none" ){
        // movieList = [...movieListRef.current]
        setMovies(movieListRef.current);
    }
  }
  const sortHandler = () => {
    let sort = sortRef.current;

    if (sort == "atoz"){
        movieList.sort((a, b) => a.title.localeCompare(b.title));
        setMovies(movieList);
    }else if (sort == "ztoa"){
        movieList.sort((a, b) => b.title.localeCompare(a.title));
        setMovies(movieList);
    } else if (sort == "none"){
        setMovies(movieListRef.current);
    };
    // setMovies(filteredMovie)
    
    // if (sort == "none"){
    //     setMovies(movieListRef.current);
    // };
    // if (sort == "none") setMovies(movieListRef.current);

    // if (sort == "none" && filter == "none") {
    //   setMovies(movieListRef.current);
    // } else {
     
    // }
  };
  const handleFilterChange = (e) => {
    if (e.target.value === "date") {
      setFilter("date");
      filterRef.current = "date";
    } else if (e.target.value === "rating") {
      setFilter("rating");
      filterRef.current = "rating";
    } else {
      setFilter("none");
      filterRef.current = "none";
    }
    filterHandler();
  };
  const handleSortChange = (e) => {
    if (e.target.value === "atoz") {
      setSort("atoz");
      sortRef.current = "atoz";
    } else if (e.target.value === "ztoa") {
      setSort("ztoa");
      sortRef.current = "ztoa";
    } else {
      setSort("none");
      sortRef.current = "none";
    }
    sortHandler();
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
  //   {movies.map((movie) => {
  //     <MovieCard
  //     title={movie.title}
  //     poster={movie.Poster}
  //     released_date = {movie.released_date}
  //     rating = {movie.rating}
  //     />
  //  }
  //  )}
  //   console.log(movieListRef.current)

  return (
    <div className="h-screen w-full relative bg-black overflow-y-auto">
      <div className="w-9/12 mx-auto text-center my-20">
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
