import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledSearchWrapper = styled.form`
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
  const [input, setInput] = React.useState("");
  const history = useHistory();
  return (
    <StyledSearchWrapper
      onSubmit={(e) => {
        e.preventDefault();

        history.push(`/search/${input}`);
        setInput("");
      }}
    >
      <StyledSearchInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </StyledSearchWrapper>
  );
}
