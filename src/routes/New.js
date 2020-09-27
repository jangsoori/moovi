import React, { useEffect } from "react";
import { connect } from "react-redux";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";
import { getNewMovies } from "../redux/actions";
import PropTypes from "prop-types";
function New({ movies, getNewMovies }) {
  useEffect(() => {
    getNewMovies();
  }, []);

  if (!movies) {
    return <Section title="Loading..."></Section>;
  }

  return (
    <Section title="New releases">
      <MoviesGrid movies={movies.results} />
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

New.propTypes = {
  getNewMovies: PropTypes.func.isRequired,
  movies: PropTypes.object,
};
export default connect(mapStateToProps, { getNewMovies })(New);
