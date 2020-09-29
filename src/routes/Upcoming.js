import React, { useEffect } from "react";
import { connect } from "react-redux";
import Section from "../components/Section";
import { clearOnUnmount, getUpcomingMovies } from "../redux/actions";
import PropTypes from "prop-types";
import MoviesGrid from "../components/MoviesGrid";
import Loading from "../components/Loading";
function Upcoming({ movies, getUpcomingMovies, clearOnUnmount }) {
  useEffect(() => {
    getUpcomingMovies();
    return () => {
      clearOnUnmount();
    };
  }, []);
  if (!movies) {
    return <Loading />;
  }
  return (
    <Section title="Coming soon">
      <MoviesGrid movies={movies.results} />
    </Section>
  );
}

Upcoming.propTypes = {
  getUpcomingMovies: PropTypes.func,
  movies: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapStateToProps, { getUpcomingMovies, clearOnUnmount })(
  Upcoming
);
