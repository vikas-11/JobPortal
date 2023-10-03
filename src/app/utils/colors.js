import { createTheme } from "@mui/material/styles";

const Colors = createTheme({
  palette: {

    primary: {
      main: "#000000",
      backgroundjob: "#CCFFCC",
      color: "#FFFFFF",
      color1: "#00000080",
      color2:"#F9F6EE",
      color3:"#FFC804",
      inactive: "#FF0000",
      pending: "#ffc804",
    },

    background: {
      default: "#6973FE",
      card: "#7797FE",
      text: "#FFFFFF",
      background1: "#7797FE",
    },

    color: {
      maincolor: "#000000",
      body: "#FFFFFF",
      textColor: "#CCFFCC",
    },

    shadows: {
      boxshadow: "4px 4px 4px 0px #00000040",
    },
  },
});

export default Colors;
