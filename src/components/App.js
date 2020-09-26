import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";
const StyledApp = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

function App() {
  return (
    <StyledApp>
      <Header />
    </StyledApp>
  );
}

App.propTypes = {};

export default App;
