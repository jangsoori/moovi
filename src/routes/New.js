import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import Section from "../components/Section";
export default function New() {
  return (
    <Section title="New releases">
      <MoviesGrid />
    </Section>
  );
}
