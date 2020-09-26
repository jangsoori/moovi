import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
const StyledLogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLogo = styled.img``;

export default function Logo() {
  return (
    <StyledLogoWrapper>
      <StyledLogo src={logo} alt="Mooovi" />
    </StyledLogoWrapper>
  );
}
