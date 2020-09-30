import React, { useState } from "react";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";

export default function Favourites() {
  const items = JSON.parse(localStorage.getItem("favourites"));
  const [movies, setMovies] = useState(items);
  const handleFav = (val) => {
    setMovies(val);
    console.log(val);
  };
  return (
    <Section title={`Your favourites (${movies ? movies.length : "0"})`}>
      <MoviesGrid handleFav={handleFav} movies={movies && movies} />
    </Section>
  );
}
