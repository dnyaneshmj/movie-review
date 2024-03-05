const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const API_URL = import.meta.env.VITE_OMDB_API_URL

export const getMovies = async () => {
  try {
    const response = await fetch(
      `${API_URL}?apiKey=${API_KEY}&s=Harry&type=movie`
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

export const convertDateToTimestamp = (date_str) => {
  let date = new Date(date_str);
  return date.getTime();
};

export const getAllMovies = async () => {
  const movies = await getMovies();
  if (!movies) return [];

  const moviePromises = movies.map(async (movie) => {
    const movieDetail = await getMovieDetails(movie?.imdbID);
    return {
      title: movieDetail?.Title,
      poster: movieDetail?.Poster,
      released_date: movieDetail?.Released,
      released_date_timestamp: convertDateToTimestamp(movieDetail?.Released),
      rating: movieDetail?.imdbRating,
    };
  });
  return Promise.all(moviePromises);
}