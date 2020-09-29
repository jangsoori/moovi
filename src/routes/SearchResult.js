import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";
import { clearOnUnmount, searchMovie } from "../redux/actions";

function SearchResult(props) {
  //Only fire this effect after search results (its key) change
  /////TODO: FIX INFINITE LOOP!
  const [loading, setLoading] = React.useState(true);
  console.log(props);
  useEffect(() => {
    props.searchMovie(props.match.params.query);
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [props.location.key]);
  // if (!props.movies) {
  //   return <Section title="Loading..."></Section>;
  // }

  if (loading) {
    return <Loading />;
  }
  return (
    <Section title="Search results">
      <MoviesGrid movies={props.movies} />
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.searchResults && state.searchResults.results,
  };
};
export default connect(mapStateToProps, { searchMovie, clearOnUnmount })(
  SearchResult
);
