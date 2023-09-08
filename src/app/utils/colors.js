import react from "react";
import { createTheme } from "@mui/material/styles";

const Colors = createTheme({
   
  textColor: "#CCFFCC",
  background: "#6973FE",
  black: "#000000",
  shadow: "2px solid #CCFFCC",
  color: "#FFFFFF",

  palette: {
    primary: {
      main: "#000000",
      backgroundjob: "#CCFFCC",
      color: " #FFFFFF",
      color1: " #00000080",
      inactive: "#FF0000",
      pending: "#ffc804",
    },

    background: {
      default: "#6973FE",
      card: " #7797FE",
      text: "#FFFFFF",
      background1: "#7797FE",
    },
    color: {
      maincolor: "#000000",
      body: " #FFFFFF",
      textColor: "#CCFFCC",
    },
    shadows: {
      boxshadow: "4px 4px 4px 0px #00000040",
    },
  },
});

export default Colors;
