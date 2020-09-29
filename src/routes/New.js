import React, { useEffect } from "react";
import { connect } from "react-redux";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";
import { getNewMovies, clearOnUnmount } from "../redux/actions";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
function New({ movies, getNewMovies, clearOnUnmount }) {
  useEffect(() => {
    getNewMovies();
    return () => {
      clearOnUnmount();
    };
  }, []);

  if (!movies) {
    return <Loading />;
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
export default connect(mapStateToProps, { getNewMovies, clearOnUnmount })(New);
