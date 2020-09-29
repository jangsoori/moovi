import React, { useEffect } from "react";
import { connect } from "react-redux";
import Section from "../components/Section";
import { getTopMovies, clearOnUnmount } from "../redux/actions";
import PropTypes from "prop-types";
import MoviesGrid from "../components/MoviesGrid";
function Top({ movies, getTopMovies, clearOnUnmount }) {
  useEffect(() => {
    getTopMovies();
    return () => {
      clearOnUnmount();
    };
  }, []);
  if (!movies) {
    return <Section title="Loading..."></Section>;
  }
  return (
    <Section title="Top rated">
      <MoviesGrid movies={movies.results} />
    </Section>
  );
}

Top.propTypes = {
  getTopMovies: PropTypes.func,
  movies: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapStateToProps, { getTopMovies, clearOnUnmount })(Top);
