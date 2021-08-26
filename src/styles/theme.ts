import { ReactElement } from "react";
import { ptBR } from "@material-ui/core/locale";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

let theme = createTheme(
  {
    palette: {
      common: {
        black: "#000000",
        white: "#fff",
      },
      background: {
        paper: "rgba(255, 255, 255, 1)",
        default: "#fafafa",
      },
      primary: {
        light: "#CFDEDE",
        main: "rgba(17, 92, 91, 1)",
        dark: "#0a2a2a",
        contrastText: "#fff",
      },
      secondary: {
        light: "rgba(221, 146, 130, 1)",
        main: "rgba(136, 53, 37, 1)",
        dark: "rgba(75, 0, 6, 1)",
        contrastText: "#fff",
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "#008E8E",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
      },
    },
  },
  ptBR
);

theme = responsiveFontSizes(theme);

const AppTheme = ({ children }: any): ReactElement => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default AppTheme;
