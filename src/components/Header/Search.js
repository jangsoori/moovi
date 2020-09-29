import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledSearchWrapper = styled.form`
  height: 100%;
  display: flex;
  position: relative;
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

// const StyledSuggestions = styled.ul`
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   ${"" /* display: flex;
//   flex-direction: column; */}
// `;
// const StyledSuggestion = styled.li`
//   ${"" /* display: block; */}
// `;

// const renderSuggestions = (list) => {
//   return list.map((item) => {
//     return <StyledSuggestion key={item.id}>{item.title}</StyledSuggestion>;
//   });
// };
// function Suggestions({ movies }) {
//   return (
//     <StyledSuggestions>{movies && renderSuggestions(movies)}</StyledSuggestions>
//   );
// }

function Search() {
  const [input, setInput] = React.useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
    setInput("");
  };

  return (
    <StyledSearchWrapper
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <StyledSearchInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </StyledSearchWrapper>
  );
}

export default Search;
