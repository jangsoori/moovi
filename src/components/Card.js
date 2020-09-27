import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
export const StyledCard = styled.li`
  position: relative;
  width: 185px;
  transition: transform 0.2s ease;
  :hover {
    transform: translateY(-20px);
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.5);
`;
const StyledTitle = styled.p`
  font-size: 1.8rem;
  color: black;
  align-self: top;
`;

const StyledMeta = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const StyledMetaItem = styled.p`
  color: black;
  margin-right: 4px;
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

function Card(props) {
  const { poster_path, title, vote_average, genre_ids, id } = props.movie;
  const genres = [];

  //For every item in genres, check if its ID equals to items in an array. If yes, render Genre name
  props.genres &&
    props.genres.filter((genre) => {
      return genre_ids.forEach((id) => {
        if (genre.id === id) {
          genres.push(genre);
        }
      });
    });

  const renderGenres = (list) => {
    return list.map((genre) => {
      return <StyledMetaItem key={genre.id}>{genre.name}</StyledMetaItem>;
    });
  };
  return (
    <StyledCard>
      <StyledImg src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt="" />
      <StyledTitle>{title}</StyledTitle>
      <StyledMeta>{renderGenres(genres)}</StyledMeta>
      <StyledScore>{vote_average.toFixed(1)}</StyledScore>
    </StyledCard>
  );
}

Card.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};
export default connect(mapStateToProps)(Card);
