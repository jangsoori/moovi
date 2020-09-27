import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { getGenres } from "../redux/actions";
import PropTypes from "prop-types";
import Routes from "../routes/Routes";
import Header from "./Header/Header";
import Sidenav from "./Sidenav/Sidenav";
import { connect } from "react-redux";
const StyledApp = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

function App(props) {
  React.useEffect(() => {
    props.getGenres();
  });
  return (
    <StyledApp>
      <Header />
      <Sidenav />
      <Routes />
    </StyledApp>
  );
}

App.propTypes = { getGenres: PropTypes.func };

export default connect(null, { getGenres })(App);
