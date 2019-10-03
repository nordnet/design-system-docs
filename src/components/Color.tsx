import styled, { withTheme } from "styled-components";
import * as React from "react";
import c from "color";

const Color = styled.dd`
  width: 200px;
  height: 100px;
  outline: 1px solid #ddd;
  background-color: ${p => p.color};
  position: relative;
  &:after {
      content: "${p => p.color}";
      position:absolute;
      left: 50%;
      top: 50%;
      color: ${p =>
        c(p.color)
          .negate()
          .toString()}
  }
`;
export const Colors = withTheme(({ theme = {} }) => !theme.color ? null : (
  <dl>
    {Object.entries(theme.color).map(([name, color]) => (
      <>
        <dt>{name}</dt>
        <Color color={color} />
      </>
    ))}
  </dl>
));
