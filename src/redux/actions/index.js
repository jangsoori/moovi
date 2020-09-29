import axios from "axios";
const API_KEY = process.env.API_KEY;

export const searchMovie = (query) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  const data = await response.data;

  await dispatch({
    type: "SEARCH_MOVIE",
    payload: data,
  });
};
export const getSearchSuggestions = (query) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  const data = await response.data;

  await dispatch({
    type: "SEARCH_MOVIE_SUGGESTIONS",
    payload: data,
  });
};

export const getNewMovies = () => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.data;
  await dispatch({
    type: "GET_NEWEST",
    payload: data,
  });
};
export const getUpcomingMovies = () => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.data;
  await dispatch({
    type: "GET_UPCOMING_MOVIES",
    payload: data,
  });
};

export const getTopMovies = () => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.data;
  await dispatch({
    type: "GET_TOP_MOVIES",
    payload: data,
  });
};

export const getMovie = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.data;
  await dispatch({
    type: "GET_MOVIE",
    payload: data,
  });
};

export const clearOnUnmount = () => {
  return {
    type: "CLEAR_STATE",
    payload: null,
  };
};

export const getGenres = () => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.data.genres;
  await dispatch({
    type: "GET_GENRES",
    payload: data,
  });
};
export const setTheme = (theme) => {
  return {
    type: "SET_THEME",
    payload: theme,
  };
};
