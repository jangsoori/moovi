import { combineReducers } from "redux";

function moviesReducer(state = null, action) {
  switch (action.type) {
    case "SEARCH_MOVIE":
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
  movies: moviesReducer,
  theme: themeReducer,
});
