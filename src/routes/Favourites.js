import React, { useEffect, useState } from "react";
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
    <Section title={`Your favourites (${movies.length})`}>
      <MoviesGrid handleFav={handleFav} movies={movies} />
    </Section>
  );
}
