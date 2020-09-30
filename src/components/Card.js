import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
export const StyledCard = styled.li`
  position: relative;
  width: 185px;
  display: grid;
  ${"" /* grid-template-rows: 1fr auto auto; */}
  transition: transform 0.2s ease;

  ${"" /* Removes buggy animation "shake" */}
  backface-visibility: hidden;
  @media only screen and (min-width: 1000px) {
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

const StyledLink = styled(Link)``;
const StyledImg = styled.img`
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.5);
  height: 278px;
`;
const StyledTitle = styled.p`
  font-size: 1.8rem;
  color: black;
  align-self: top;
`;

const StyledScore = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  transform: translate(50%, -50%);
  font-size: 1.8rem;
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledActions = styled.section`
  display: flex;
  ${"" /* position: absolute;
  top: 0;
  left: 0; */}
`;

const StyledAction = styled.i`
  margin-right: 1rem;
  color: black;
  @media only screen and (min-width: 1000px) {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.fas,
  &.far {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function Card(props) {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const { poster_path, title, vote_average, id } = props.movie;

  const history = useHistory();
  //HANDLE FAVOURITES

  const saveFav = () => {
    let existingEntries = JSON.parse(localStorage.getItem("favourites")) || [];
    existingEntries.push(props.movie);
    localStorage.setItem("favourites", JSON.stringify(existingEntries));
    props.handleFav && props.handleFav(existingEntries);
  };
  const deleteFav = (id) => {
    let existingEntries = JSON.parse(localStorage.getItem("favourites")) || [];
    const filtered = existingEntries.filter((entry) => entry.id !== id);
    localStorage.setItem("favourites", JSON.stringify(filtered));
    props.handleFav && props.handleFav(filtered);
  };
  //Check if item is in favourites
  const isFav = () => {
    let existingEntries = JSON.parse(localStorage.getItem("favourites")) || [];
    return existingEntries.some((fav) => fav.id === id);
  };
  //HANDLE WATCH LATER

  const saveWatchLater = () => {
    let existingEntries = JSON.parse(localStorage.getItem("watchLater")) || [];
    existingEntries.push(props.movie);
    localStorage.setItem("watchLater", JSON.stringify(existingEntries));
    props.handleWatchLater && props.handlewatchLater(existingEntries);
  };
  const deleteWatchLater = (id) => {
    let existingEntries = JSON.parse(localStorage.getItem("watchLater")) || [];
    const filtered = existingEntries.filter((entry) => entry.id !== id);
    localStorage.setItem("watchLater", JSON.stringify(filtered));
    props.handleWatchLater && props.handleWatchLater(filtered);
  };
  //Check if item is in watchLater
  const isWatchLater = () => {
    let existingEntries = JSON.parse(localStorage.getItem("watchLater")) || [];
    return existingEntries.some((watchLater) => watchLater.id === id);
  };
  return (
    <StyledCard>
      <StyledImg
        onClick={() => history.push(`/movies/${id}`)}
        src={`http://image.tmdb.org/t/p/w185${poster_path}`}
        alt=""
      />
      <StyledTitle>{title}</StyledTitle>
      <StyledScore>{vote_average.toFixed(1)}</StyledScore>
      <StyledActions>
        <StyledAction
          onClick={() => {
            if (!isFav()) {
              saveFav();
            } else {
              deleteFav(id);
            }
            forceUpdate();
          }}
          className={`fa${isFav() ? "s" : "r"} fa-heart fa-2x`}
        ></StyledAction>
        <StyledAction
          onClick={() => {
            if (!isWatchLater()) {
              saveWatchLater();
            } else {
              deleteWatchLater(id);
            }
            forceUpdate();
          }}
          className={`fa${isWatchLater() ? "s" : "r"} fa-clock fa-2x`}
        ></StyledAction>
      </StyledActions>
    </StyledCard>
  );
}

Card.propTypes = {
  movie: PropTypes.object,
};

export default Card;
