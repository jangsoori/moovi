import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";

export default function Favourites() {
  const movies = JSON.parse(localStorage.getItem("favourites")) || [];
  console.log(movies);
  return (
    <Section title="Your favourites">
      <MoviesGrid movies={movies} />
    </Section>
  );
}
