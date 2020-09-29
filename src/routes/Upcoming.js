import React from "react";
import Section from "../components/Section";
import MoviesGrid from "../components/MoviesGrid";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const API_KEY = process.env.API_KEY;

function Upcoming() {
  const movies = useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    {}
  );

  return (
    <Section title="Coming soon">
      {!movies.response ? (
        <Loading />
      ) : (
        <MoviesGrid movies={movies.response.results} />
      )}
    </Section>
  );
}

export default Upcoming;
