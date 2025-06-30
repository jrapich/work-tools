import { createTheme } from "@mui/material/styles";

//color palette object. customize the colors as you see fit
const colors = {
  silver: "#c2c2c2",
  lightSilver: "#d6d6d6",
  jade: "#5bae6a",
  airForceBlue: "#597e9b",
  spaceCadetBlue: "#27293f",
  deepSkyBlue: "#00B7FF",
  tangBlue: "#2B5BCC",
  royalBlue: "#4672D8",
  onyx: "#666666",
  jetGrey: "#292929",
  raisinBlack: "#181d27",
  backgroundBlack: "#0A0903",
  flame: "#EB5F2D",
  darkOrangeRed: "#FF0000",
  darkerOrange: "#FF4800",
  darkOrange: "#FF6000",
  brightOrange: "#FF8200",
  apricot: "#FCCDAD",
  orangeYellow: "#FFC100",
  pureWhite: "#FFFFFF",
};

// Create our theme palette
let theme = createTheme({
  palette: {
    // text: {
    //   main: colors.darkOrange,
    // },
    background: {
      main: colors.backgroundBlack,
      desc: "background color, background black",
    },
    primary: {
      main: colors.jetGrey,
      desc: "primary color, 60%(background)",
    },
    secondary: {
      main: colors.backgroundBlack,
      desc: "secondary color. 30%(elements)",
    },
    tertiary: {
      main: colors.silver,
      desc: "tertiary color, 10%(text and borders)",
    },
    border: {
      main: colors.silver,
      desc: "border color of some elements",
    },
    white: {
      main: colors.pureWhite,
      desc: "pure white",
    },
    // accent: {
    //   main: colors.jade,
    // },
  },
});

//create the theme with MUI
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.tertiary.main,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: theme.palette.tertiary.main,
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderTop: `solid ${theme.palette.tertiary.main}`,
          borderBottom: `solid ${theme.palette.tertiary.main}`,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.tertiary.main,
        },
      },
    },
    // MuiCardContent: {
    //   styleOverrides: {
    //     root: {
    //       color: theme.palette.primary.main,
    //       //backgroundColor: theme.palette.primary.dark,
    //       //borderColor: theme.palette.secondary.main,
    //     },
    //   },
    // },
    // MuiCardActions: {
    //   styleOverrides: {
    //     root: {
    //       color: theme.palette.primary.main,
    //       backgroundColor: theme.palette.secondary.main,
    //       borderColor: theme.palette.secondary.main,
    //     },
    //   },
    // },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
          // marginBottom: "5px",
          // "& .MuiOutlinedInput-notchedOutline": {
          //   borderColor: theme.palette.secondary,
          // },
          // "&.Mui-focused": {
          //   "& .MuiOutlinedInput-notchedOutline": {
          //     "& legend": {
          //       overflow: "initial",
          //       primaryAlign: "right",
          //       "& span": {
          //         opacity: "100",
          //       },
          //     },
          //   },
          // },
          // "&:hover .MuiOutlinedInput-notchedOutline": {
          //   borderColor: theme.palette.primary.main,
          // },
          // "& .MuiOutlinedInput-input": {
          //   color: theme.palette.primary.main,
          // },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.tertiary.main,
          color: theme.palette.secondary.main,
          "&:hover": {
            //color: theme.palette.warning.main,
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: theme.palette.tertiary.main,
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
  },
});

export default theme;
