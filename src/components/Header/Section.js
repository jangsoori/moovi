import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const StyledSection = styled.section`
  padding: 5rem 6.8rem;
`;
const Title = styled.h4`
  color: black;
  font-size: 3.6rem;
  font-weight: normal;
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
  title: PropTypes.string.isRequired,
};
