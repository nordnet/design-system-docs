import React from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider
} from "styled-components";
import { createTheme } from "@nordnet/ui";

const sheetByPathname = new Map();
const theme = createTheme();
// eslint-disable-next-line react/prop-types,react/display-name
export const wrapRootElement = ({ element, pathname }) => {
  const sheet = new ServerStyleSheet();
  sheetByPathname.set(pathname, sheet);
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </StyleSheetManager>
  );
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheet = sheetByPathname.get(pathname);
  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
    sheetByPathname.delete(pathname);
  }
};
