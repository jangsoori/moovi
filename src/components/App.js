import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Routes from "../routes/Routes";
import Header from "./Header/Header";
import Sidenav from "./Sidenav/Sidenav";
const StyledApp = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSVG = styled.img``;

const StyledSVGLink = styled.a`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 15rem;
`;
function App() {
  return (
    <StyledApp>
      <Header />
      <Sidenav />
      <Routes />
      <StyledSVGLink
        href="https://www.themoviedb.org"
        target="_blank"
        rel="noopener"
      >
        <StyledSVG src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
      </StyledSVGLink>
    </StyledApp>
  );
}

export default App;
