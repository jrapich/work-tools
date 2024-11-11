import { createTheme } from "@mui/material/styles";

//color palette object. customize the colors as you see fit
const colors = {
  silver: "#c2c2c2",
  jade: "#5bae6a",
  airForceBlue: "#597e9b",
  spaceCadetBlue: "#27293f",
  raisinBlack: "#181d27",
  backgroundBlack:"#0A0903",
  darkOrangeRed:"#FF0000",
  darkerOrange: "#FF4800",
  darkOrange: "#FF6000",
  brightOrange:"#FF8200",
  orangeYellow: "#FFC100",
};

// Create our theme palette
let theme = createTheme({
  palette: {
    // text: {
    //   main: colors.darkOrange,
    // },
    background: {
      main: colors.backgroundBlack,
    },
    primary: {
      main: colors.darkOrange,
    },
    secondary: {
      main: colors.spaceCadetBlue,
    },
    tertiary: {
      main: colors.silver,
    },
    // accent: {
    //   main: colors.jade,
    // },
  },
});

//create the theme with MUI
//this is custom/colors boilerplate for an early version of a basic site. youll want to customize this as your own.
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.background.main,
          color: theme.palette.primary.main,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderTop: `solid ${theme.palette.primary.dark}`,
          borderBottom: `solid ${theme.palette.primary.dark}`,
        },
      },
    },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       borderColor: theme.palette.secondary.main,
    //     },
    //   },
    // },
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
          color: theme.palette.primary.main,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
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
          color: theme.palette.primary.main,
          "&:hover": {
            //color: theme.palette.warning.main,
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.background.main,
        },
      },
    },
  },
});

export default theme;
