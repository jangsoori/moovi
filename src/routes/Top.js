import React from "react";
import Section from "../components/Section";

import MoviesGrid from "../components/MoviesGrid";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";

const API_KEY = process.env.API_KEY;

function Top() {
  const movies = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    {}
  );
  return (
    <Section title="Top rated">
      {!movies.response ? (
        <Loading />
      ) : (
        <MoviesGrid movies={movies.response.results} />
      )}
    </Section>
  );
}

export default Top;
