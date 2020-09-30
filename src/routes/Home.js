import React from "react";
import Section from "../components/Section";
import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Header/Search";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledTitle = styled.p`
  color: black;
  font-size: 3rem;
  margin-bottom: 2rem;
`;
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledSearch = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Search movies",
}))`
  background: none;
  border: 1px solid black;
  padding: 1rem 2rem;
  border-right: none;
  font-family: inherit;
  color: black;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 50%;
  font-size: 3rem;
`;

const StyledBtn = styled.button.attrs(() => ({
  type: "submit",
}))`
  height: 100%;
  border: 1px solid black;
  border-left: none;
  font-size: 3rem;
  padding: 1rem 2rem;
  font-family: inherit;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
`;
export default function Home(props) {
  const [input, setInput] = React.useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
    setInput("");
  };

  return (
    <Section title="Welcome to moovi">
      <Wrapper>
        <StyledTitle>Explore now</StyledTitle>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: `center`,
          }}
        >
          <StyledSearch
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <StyledBtn type="submit">Search now</StyledBtn>
        </form>
      </Wrapper>
    </Section>
  );
}
