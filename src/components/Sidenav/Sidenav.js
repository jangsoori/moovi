import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const StyledSidenavWrapper = styled.nav`
  grid-row: 2/3;
  grid-column: 1/2;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.sidebar};
  height: 100%;
  width: 24rem;
`;
const StyledSidenavContent = styled.section``;
const StyledList = styled.ul`
  display: grid;
`;

const StyledListItem = styled.li``;
const StyledLink = styled(Link)`
  padding: 1.6rem 2rem;
  display: block;
  font-size: 2rem;
  transition: all 0.25s ease;
  :hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.1);
  }
`;
export default function Sidenav() {
  return (
    <StyledSidenavWrapper>
      <StyledSidenavContent>
        <StyledList>
          <StyledListItem>
            <StyledLink exact to="/">
              Home
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/new">New releases</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/top">Top rated</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/upcoming">Coming soon</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/favourites">Favourites</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/saved">Watch later</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledSidenavContent>
    </StyledSidenavWrapper>
  );
}
