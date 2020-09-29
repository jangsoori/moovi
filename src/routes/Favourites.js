import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";

export default function Favourites() {
  const [movies, setMovies] = React.useState();
  // React.useEffect(() => {
  //   setMovies(JSON.parse(localStorage.getItem("favourites")) || []);
  // }, [movies]);
  return (
    <Section title="Your favourites">
      <MoviesGrid movies={movies} />
    </Section>
  );
}
