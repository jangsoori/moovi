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
