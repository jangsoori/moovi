import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  fonts: ["Montserrat", "sans-serif"],
  colors: {
    primary: `#FF5555`,
    secondary: `#fff`,
    sidebar: `#282828`,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string,
};

export default Theme;
