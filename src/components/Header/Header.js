import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  height: 6.5rem;
  grid-row: 1/2;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 240px 1fr;
  align-items: center;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    justify-items: center;
    padding: 2rem 0;
  }
`;

export const Header = (props) => {
  return (
    <StyledHeader>
      <Logo />
      <Search />
    </StyledHeader>
  );
};

export default Header;
