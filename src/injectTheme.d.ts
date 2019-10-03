import { Theme } from "@nordnet/ui/src/theme/theme.types";
declare module "styled-components" {
  // Need to override DefaultTheme interface
  // for styled-components to infer correct
  // theme prop type
  interface DefaultTheme extends Theme {}
}
