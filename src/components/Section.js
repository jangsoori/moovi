import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const StyledSection = styled.section`
  padding: 5rem 6.8rem;
  padding-bottom: 0;
  position: relative;
  @media only screen and (max-width: 1000px) {
    padding-right: 3rem;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 3rem;
  }
`;
const Title = styled.h4`
  color: black;
  font-size: 3.6rem;
  font-weight: normal;
  margin-bottom: 5rem;
`;
const Content = styled.section``;
export default function Section({ children, title }) {
  return (
    <StyledSection>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};
