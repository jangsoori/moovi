import axios from "axios";
const API_KEY = process.env.API_KEY;

export const searchMovie = (query) => async (dispatch) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
  );
  const data = await response.data;

  await dispatch({
    type: "SEARCH_MOVIE",
    payload: data,
  });
};

export const setTheme = (theme) => {
  return {
    type: "SET_THEME",
    payload: theme,
  };
};
