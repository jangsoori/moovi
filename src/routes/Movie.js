import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Section from "../components/Section";
import { getMovie, clearOnUnmount } from "../redux/actions";

function Movie({ match, getMovie, clearOnUnmount, movie }) {
  useEffect(() => {
    getMovie(match.params.id);
    return () => {
      clearOnUnmount();
    };
  }, []);
  if (!movie) {
    return <Section title="Loading"></Section>;
  }
  console.log(movie);
  return <Section title={movie.title}>dsad</Section>;
}

Movie.propTypes = {
  match: PropTypes.object,
  getMovie: PropTypes.func,
  clearOnUnmount: PropTypes.func,
  movie: PropTypes.object,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovie, clearOnUnmount })(Movie);
