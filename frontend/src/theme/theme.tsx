import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  colors: {
    brand: {
      0: "#fff",
      20: "#ddd",
      40: "#aaa",
      60: "#313245",
      70: "#262736",
      80: "#000",
      100: "#00cd74",
      200: "#00b466",
      250: "#1976d24d",
      300: "#5865f2",
      400: "#6441a5",
      500: "#cd201f",
      600: "#ff3860",
      700: "#fe9d10",
    },
  },
  fonts: {
    heading: `'Roboto', sans serif`,
    body: `'Roboto', sans serif`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: {
    base: "0em",
    sm: "29em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
});

export default myTheme;
