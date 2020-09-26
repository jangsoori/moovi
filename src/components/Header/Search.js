import React from "react";
import styled from "styled-components";

const StyledSearchWrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
`;
const StyledSearchInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Search movies",
}))`
  background: rgba(255, 255, 255, 0.12);
  border: none;
  height: 60%;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 2px;

  font-family: inherit;
  font-size: 1.6rem;

  ::placeholder {
    color: white;
    opacity: 1;
  }
`;

export default function Search() {
  return (
    <StyledSearchWrapper>
      <StyledSearchInput />
    </StyledSearchWrapper>
  );
}
