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

export const getNewMovies = () => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.data;
  await dispatch({
    type: "GET_NEWEST",
    payload: data,
  });
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
