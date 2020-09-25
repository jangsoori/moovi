import { combineReducers } from "redux";

function moviesReducer(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  movies: moviesReducer,
});
