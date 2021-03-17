import Typography from "typography";
//import gray from "gray-percentage"
//import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const theme = {
  title: "Oak National Academy Teachers",
  baseFontSize: "12px",
  baseLineHeight: "12px",
  headerFontFamily: ["Rigton-SemiBold", "sans-serif"],
  bodyFontFamily: ["Rigton-Medium", "sans-serif"],
  headerColor: "#0800C9",
  bodyColor: "#040234",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 600,
  /* eslint-disable-next-line no-unused-vars */
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      fontSize: "12px",
      lineHeight: "12px",
    },
    "p, a, li, input, textarea": {
      fontSize: "20px",
      lineHeight: "30px",
    },
    p: {
      marginBottom: "12px",
      fontFamily: "sf",
    },
    li: {
      marginBottom: "12px",
    },
    a: {
      color: "#00468C",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      color: options.bodyColor,
    },

    "h1, .h1": {
      fontSize: "24px",
      lineHeight: "36px",
    },
    h2: {
      fontSize: "30px",
      lineHeight: "42px",
    },
    h3: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: "400",
    },
    "h4, .h4": {
      fontSize: "20px",
      lineHeight: "24px",
    },
    "h5, .h5": {
      fontSize: "18px",
      lineHeight: "24px",
    },
  }),
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
