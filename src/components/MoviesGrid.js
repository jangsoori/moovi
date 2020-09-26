import styled from "styled-components";
import React from "react";

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
`;

export const StyledCard = styled.li`
  color: black;
`;

const renderMovies = (list) => {
  return list.map((item, i) => <StyledCard key={i}>test</StyledCard>);
};
export default function MoviesGrid(props) {
  return <StyledGrid>{renderMovies(["list"])}</StyledGrid>;
}
