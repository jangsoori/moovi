import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledSidenavWrapper = styled.nav`
  grid-row: 2/3;
  grid-column: 1/2;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.sidebar};
  height: 100%;
  width: 24rem;
  position: relative;
  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 10;
    ${({ active }) =>
      active &&
      css`
        width: 24rem;
        opacity: 1;
        visibility: visible;
      `};
  }
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

const Burger = styled.div`
  position: fixed;
  top: 5rem;
  left: 0px;
  height: 4rem;
  width: 4rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 50% 50% 0;
  background: white;
  padding: 10px 10px;
  border: 1px solid black;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
  span {
    width: 100%;
    height: 4px;
    background: black;
    z-index: 100;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 2rem;
  width: 2rem;
  flex-direction: column;

  justify-content: space-between;
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
  span {
    width: 100%;
    height: 4px;
    background: white;
    z-index: 100;
    transform-origin: -1.25px;
    :first-child {
      transform: rotate(45deg);
    }
    :last-child {
      transform: rotate(-45deg);
    }
  }
`;
export default function Sidenav() {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <>
      <StyledSidenavWrapper active={menuActive}>
        <CloseBtn onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
        </CloseBtn>
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
      <Burger onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
    </>
  );
}
