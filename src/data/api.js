const getMovies = async () => {
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

const getMovieDetails = async (imdbId) => {
  try {
    const response = await fetch(
      `${API_URL}?apiKey=${API_KEY}&i=${"tt0232500"}&type=movie`
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
