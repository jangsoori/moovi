import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const API_KEY = process.env.API_KEY;

function New() {
  const movies = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    {}
  );

  return (
    <Section title="New releases">
      {!movies.response ? (
        <Loading />
      ) : (
        <MoviesGrid movies={movies.response.results} />
      )}
    </Section>
  );
}

export default New;
