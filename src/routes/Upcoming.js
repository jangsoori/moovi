import React, { useEffect } from "react";
import { connect } from "react-redux";
import Section from "../components/Section";
import { getUpcomingMovies } from "../redux/actions";
import PropTypes from "prop-types";
import MoviesGrid from "../components/MoviesGrid";
function Upcoming({ movies, getUpcomingMovies }) {
  useEffect(() => {
    getUpcomingMovies();
  }, []);
  if (!movies) {
    return <Section title="Loading..."></Section>;
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
export default connect(mapStateToProps, { getUpcomingMovies })(Upcoming);
