// src/gatsby-theme-docz/index.js
import React from "react";
import { createTheme } from "@nordnet/ui";
import { ThemeProvider } from "styled-components";
const theme = createTheme();

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
};
