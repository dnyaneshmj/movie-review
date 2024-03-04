const API_KEY = "db6a248b";
const API_URL = "http://www.omdbapi.com/";

export const getMovies = async () => {
  try {
    const response = await fetch(
      `${API_URL}?apiKey=${API_KEY}&s=fast&type=movie`
    );
    if (response.ok) {
      const result = await response.json();
      return result.Search;
    } else {
      console.error(`Request failed with status code ${response}`);
      return null;
    }
  } catch (error) {
    console.error("Request error:", error);
    return null;
  }
};

export const getMovieDetails = async (imdbId) => {
  try {
    const response = await fetch(
      `${API_URL}?apiKey=${API_KEY}&i=${imdbId}&type=movie`
    );
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      console.error(`Request failed with status code ${response}`);
      return null;
    }
  } catch (error) {
    console.error("Request error:", error);
    return null;
  }
};


export const getAllMovies = async() =>{
    
    const movies = await getMovies()
    const movieList = []
    movies.forEach( async (movie) => {
        console.log(movie.imdbID);
        const movieDetail = await getMovieDetails(movie.imdbID);
        let movieObj = {
            title: movieDetail?.Title,
            poster: movieDetail?.Poster,
            released_date: movieDetail?.Released,
            rating:movieDetail?.imdbRating
        }
        movieList.push(movieObj)
    });
       
        

}
