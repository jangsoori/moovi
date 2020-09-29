import React, { useEffect, useState } from "react";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";

export default function Favourites() {
  const items = JSON.parse(localStorage.getItem("favourites"));
  const [movies, setMovies] = useState(items);
  const handleChange = (val) => {
    setMovies(val);
  };
  return (
    <Section title="Your favourites">
      <MoviesGrid handleChange={handleChange} movies={movies} />
    </Section>
  );
}
