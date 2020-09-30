import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  return (
    <StyledLogoWrapper>
      <StyledLogo onClick={() => history.push("/")} src={logo} alt="Mooovi" />
    </StyledLogoWrapper>
  );
}
