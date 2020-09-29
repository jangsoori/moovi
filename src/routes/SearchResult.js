import Axios from "axios";
import React, { useState } from "react";
import Loading from "../components/Loading";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";
const API_KEY = process.env.API_KEY;

function SearchResult(props) {
  const [movies, setMovies] = useState();
  const fetchSearch = async () => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.match.params.query}&page=1`
    );
    const data = await response.data;
    setMovies(data);
  };

  React.useEffect(() => {
    fetchSearch();
  }, [props.match.params.query]);
  return (
    <Section title="Search results">
      {!movies ? <Loading /> : <MoviesGrid movies={movies.results} />}
    </Section>
  );
}

export default SearchResult;
