import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding:0;
    margin:0;
  };
html,body,#root{
    height:100%;
};
html{
  font-size:62.5%;
font-height:1.2;
${"" /* removes on click lag on mobile devices */}
touch-action: manipulation;

};
  body {
    color: ${({ theme }) => theme.colors.secondary};
    font-family:${({ theme }) => theme.fonts[0]};

  };
  a{
    color:inherit;
    font:inherit;
    text-decoration:none;
  }
  ul{
    list-style:none
  }
  
  `;
