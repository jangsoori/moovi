import React, { useEffect } from "react";
import { connect } from "react-redux";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";
import { searchMovie } from "../redux/actions";

function SearchResult(props) {
  console.log(props);
  //Only fire this effect after search results (props.movies) change
  useEffect(() => {
    props.searchMovie(props.match.params.query);
  }, [props.movies]);
  if (!props.movies) {
    return <Section title="Loading..."></Section>;
  }

  return (
    <Section title="Search results">
      <MoviesGrid movies={props.movies.results} />
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.searchResults,
  };
};
export default connect(mapStateToProps, { searchMovie })(SearchResult);
