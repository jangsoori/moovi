import { combineReducers } from "redux";

function moviesReducer(state = null, action) {
  switch (action.type) {
    case "GET_NEWEST":
      return action.payload;
    default:
      return state;
  }
}

function searchReducer(state = null, action) {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return action.payload;
    default:
      return state;
  }
}

function genresReducer(state = null, action) {
  switch (action.type) {
    case "GET_GENRES":
      return action.payload;
    default:
      return state;
  }
}
function themeReducer(state = "light", action) {
  switch (action.type) {
    case "SET_THEME":
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  search: searchReducer,
  movies: moviesReducer,
  genres: genresReducer,
  theme: themeReducer,
});
