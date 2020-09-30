import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
const StyledLogoWrapper = styled.section``;
const StyledLogo = styled.img`
  padding-left: 2rem;
  @media only screen and (max-width: 400px) {
    padding-left: 0;
    justify-self: center;
  }
`;

export default function Logo() {
  return (
    <StyledLogoWrapper>
      <StyledLogo src={logo} alt="Mooovi" />
    </StyledLogoWrapper>
  );
}
