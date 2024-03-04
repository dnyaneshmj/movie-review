import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";

// import downarrow from "./../public/img/down-arrow.svg"
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<MovieList />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
