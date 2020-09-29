import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  gap: 3rem;
  padding-bottom: 2rem;
`;

export const StyledCard = styled.li`
  color: black;
`;

const renderMovies = (list) => {
  return list.map((item, i) => <Card movie={item} key={i} />);
};
export default function MoviesGrid(props) {
  console.log(props);

  if (!props.movies) {
    return null;
  }
  return <StyledGrid>{renderMovies(props.movies)}</StyledGrid>;
}

MoviesGrid.propTypes = {
  movies: PropTypes.array,
};
