import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  height: 6.5rem;
  grid-row: 1/2;
`;

export const Header = () => {
  return <StyledHeader>Hi</StyledHeader>;
};

export default Header;
