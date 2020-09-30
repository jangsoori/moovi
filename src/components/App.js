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

function App() {
  return (
    <StyledApp>
      <Header />
      <Sidenav />
      <Routes />
    </StyledApp>
  );
}

export default App;
