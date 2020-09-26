import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const theme = {
  fonts: ["Montserrat", "sans-serif"],
  colors: {
    primary: `#FF5555`,
  },
};

const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    secondary: `#fff`,
  },
};
const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    secondary: `#282828`,
  },
};

const Theme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
export default connect(mapStateToProps)(Theme);
