import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";

export default function Saved() {
  const items = JSON.parse(localStorage.getItem("watchLater"));
  const [movies, setMovies] = React.useState(items);
  const handleWatchLater = (val) => {
    setMovies(val);
  };
  return (
    <Section title={`Watch later (${movies.length})`}>
      <MoviesGrid handleWatchLater={handleWatchLater} movies={movies} />
    </Section>
  );
}
