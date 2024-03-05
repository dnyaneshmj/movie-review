import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieListData from "./data/MovieListData"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MovieListData />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
