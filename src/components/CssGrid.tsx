import { CssGrid } from "@nordnet/ui";
import styled from "styled-components";

export const Item = CssGrid.Item;
export const Container = CssGrid.Container;

const StyledContent = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;

const StyledMarkdownContainer = styled.div`
  img {
    display: block;
    max-width: 600px;
  }
`;

const Content = ({ children }: any) => (
  <StyledContent>{children}</StyledContent>
);

export { CssGrid, Content };
