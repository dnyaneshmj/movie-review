import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import { getAllMovies } from "./data/api";

// import downarrow from "./../public/img/down-arrow.svg"
function App() {
  // const [movies,setMovies] = useState([]);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try{
  //       const list_movies = await getAllMovies();
  //       setMovies(list_movies)
  //     }catch(error){
  //       console.log(error);
  //     }
      
  //   };
  //   fetchMovies();
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MovieList />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
