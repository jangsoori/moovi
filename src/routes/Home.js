import React from "react";
import Section from "../components/Section";
import MoviesGrid from "../components/MoviesGrid";

export default function Home(props) {
  console.log(props);
  return (
    <Section title="Welcome to moovi">
      <MoviesGrid />
    </Section>
  );
}
