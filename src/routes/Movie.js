import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Section from "../components/Section";
import { getMovie, clearOnUnmount } from "../redux/actions";
import styled from "styled-components";
import Axios from "axios";
//BABEL regenerationRuntime is not defined fix
import "regenerator-runtime/runtime"; //REDUX IMPORTS
const API_KEY = process.env.API_KEY;

const MovieWrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;
`;
const MoviePosterWrapper = styled.section``;
const MoviePoster = styled.img`
  border-radius: 2px;
`;
const MovieInfoWrapper = styled.section`
  color: black;
`;
const MovieInfoItems = styled.ul`
  display: flex;
  flex-direction: column;
`;
const MovieInfoItem = styled.li`
  display: grid;
  grid-template-rows: auto 1fr;
  margin-bottom: 5px;
`;

const Genre = styled.li`
  margin-right: 5px;
`;
const DetailsTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2px;
`;
const DetailsContent = styled.section``;

function Movie({ match, getMovie, clearOnUnmount, movie }) {
  const [movieCast, setMovieCast] = React.useState(null);

  const fetchCast = async (id) => {
    const res = await Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );
    const data = await res.data;
    setMovieCast(data);
  };
  useEffect(() => {
    getMovie(match.params.id);
    fetchCast(match.params.id);
    return () => {
      clearOnUnmount();
    };
  }, []);
  if (!movie) {
    return <Section title="Loading"></Section>;
  }

  const renderPeople = (list) => {
    return list
      .slice(0, 5)
      .map((person) => <li key={person.id}>{person.name}</li>);
  };

  return (
    <Section title={movie.title}>
      <MovieWrapper>
        <MoviePosterWrapper>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          />
        </MoviePosterWrapper>
        <MovieInfoWrapper>
          <MovieInfoItems>
            <MovieInfoItem>
              <DetailsTitle>Genres</DetailsTitle>
              <DetailsContent style={{ display: "flex" }}>
                {movie.genres.map((genre) => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Website</DetailsTitle>
              <DetailsContent>
                {!movie.homepage ||
                movie.homepage === "http://essaymonkey.net/" ? (
                  <p>None</p>
                ) : (
                  <a href={movie.homepage} target="_blank" rel="noreferrer">
                    {movie.homepage}
                  </a>
                )}
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Release date</DetailsTitle>
              <DetailsContent>
                <p>{movie.release_date}</p>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Runtime</DetailsTitle>
              <DetailsContent>
                <p>{movie.runtime} min</p>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Plot</DetailsTitle>
              <DetailsContent>
                <p>{movie.overview}</p>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Producers</DetailsTitle>
              <DetailsContent>
                <ul>{movieCast && renderPeople(movieCast.crew)}</ul>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Cast</DetailsTitle>
              <DetailsContent>
                <ul>{movieCast && renderPeople(movieCast.cast)}</ul>
              </DetailsContent>
            </MovieInfoItem>
          </MovieInfoItems>
        </MovieInfoWrapper>
      </MovieWrapper>
    </Section>
  );
}

Movie.propTypes = {
  match: PropTypes.object,
  getMovie: PropTypes.func,
  getCredits: PropTypes.func,
  clearOnUnmount: PropTypes.func,
  movie: PropTypes.object,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, {
  getMovie,
  clearOnUnmount,
})(Movie);
