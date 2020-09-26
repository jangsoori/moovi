import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header/Header";
import Sidenav from "./Sidenav/Sidenav";
const StyledApp = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Sidenav />
    </StyledApp>
  );
}

App.propTypes = {};

export default App;
