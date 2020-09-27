import { combineReducers } from "redux";

function moviesReducer(state = null, action) {
  switch (action.type) {
    case "GET_NEWEST":
      return action.payload;
    case "GET_TOP_MOVIES":
      return action.payload;
    case "GET_UPCOMING_MOVIES":
      return action.payload;
    case "CLEAR_STATE":
      return null;
    default:
      return state;
  }
}

function movieReducer(state = null, action) {
  switch (action.type) {
    case "GET_MOVIE":
      return action.payload;
    case "CLEAR_STATE":
      return null;
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
  movie: movieReducer,
  genres: genresReducer,
  theme: themeReducer,
});
