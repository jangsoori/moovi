import React from "react";
import Section from "../components/Section";
import MoviesGrid from "../components/MoviesGrid";

export default function Home(props) {
  return (
    <Section title="Welcome to moovi">
      <MoviesGrid movies={[]} />
    </Section>
  );
}
