import React from "react";
import PropTypes from "prop-types";
import Section from "../components/Section";
import styled from "styled-components";
//BABEL regenerationRuntime is not defined fix
import "regenerator-runtime/runtime"; //REDUX IMPORTS
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const API_KEY = process.env.API_KEY;

const MovieWrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;
const MoviePosterWrapper = styled.section``;
const MoviePoster = styled.img`
  border-radius: 2px;
  max-height: 500px;
  @media only screen and (max-width: 400px) {
    max-height: 300px;
  }
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
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2px;
`;
const DetailsContent = styled.section`
  font-size: 1.6rem;
`;

function Movie({ match }) {
  console.log(match.params.id);
  const movieCast = useFetch(
    `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${API_KEY}`,
    {}
  );
  const movie = useFetch(
    `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`,
    {}
  );
  console.log(movie);
  if (!movie.response || !movieCast.response) {
    return <Loading />;
  }

  const renderPeople = (list) => {
    return list.slice(0, 5).map((person, i) => <li key={i}>{person.name}</li>);
  };

  return (
    <Section title={movie.response.title}>
      <MovieWrapper>
        <MoviePosterWrapper>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w400${movie.response.poster_path}`}
          />
        </MoviePosterWrapper>
        <MovieInfoWrapper>
          <MovieInfoItems>
            <MovieInfoItem>
              <DetailsTitle>The Plot</DetailsTitle>
              <DetailsContent>
                <p className="plot">{movie.response.overview}</p>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Genres</DetailsTitle>
              <DetailsContent style={{ display: "flex" }}>
                {movie.response.genres.map((genre) => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Website</DetailsTitle>
              <DetailsContent>
                {!movie.response.homepage ||
                movie.response.homepage === "http://essaymonkey.net/" ? (
                  <p>None</p>
                ) : (
                  <a
                    href={movie.response.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {movie.response.homepage}
                  </a>
                )}
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Release date</DetailsTitle>
              <DetailsContent>
                <p>{movie.response.release_date}</p>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Runtime</DetailsTitle>
              <DetailsContent>
                <p>{movie.response.runtime} min</p>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Producers</DetailsTitle>
              <DetailsContent>
                <ul>{movieCast && renderPeople(movieCast.response.crew)}</ul>
              </DetailsContent>
            </MovieInfoItem>
            <MovieInfoItem>
              <DetailsTitle>Cast</DetailsTitle>
              <DetailsContent>
                <ul>{movieCast && renderPeople(movieCast.response.cast)}</ul>
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
};

export default Movie;
