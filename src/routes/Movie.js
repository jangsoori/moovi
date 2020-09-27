import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Section from "../components/Section";
import { getMovie, clearOnUnmount } from "../redux/actions";

function Movie({ match, getMovie, clearOnUnmount }) {
  useEffect(() => {
    getMovie(match.params.id);
    return () => {
      clearOnUnmount();
    };
  }, []);
  console.log(match);
  return <Section title="hi">dsad</Section>;
}

Movie.propTypes = {};

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, { getMovie, clearOnUnmount })(Movie);
