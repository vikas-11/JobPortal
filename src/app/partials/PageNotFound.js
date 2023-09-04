import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Container,
} from "@mui/material";
import DrawerComp from "./Drawer";
import Footer from "./Footer";
import error from "../assets/img/users/error.jpg";
import "./PageNotfound.css";
import Axios from "../../../../utils/axios";

const heading = {
  fontWeight: "500",
  textAlign: "center",
  color: "#6973FE",
  marginTop: "30px",
  marginBottom: "10px",
  lineHeight: "70px",
};

const button = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "20px",
  borderRadius: "30px",
  boxShadow:"none",
  border:"1px solid #7797FE",
  textTransform: "capitalize",
  backgroundColor: "white",
  color: "#7797FE",
  "&:hover": {
    color: "black",
    backgroundColor: "#7797FE",
  },
};

const PageNotFound = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

// const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   const fetchPageNotFound = async () => {
//     try {
//       const response = await Axios.get("/");
//       setData(response.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchPageNotFound();
//   }, []);

  return (
    <>
      <AppBar
        sx={{
          background: "#6973FE",
          boxShadow: "none",
          position: "static",
          height: "70px",
        }}
      >
        <Toolbar>
          <DrawerComp sx={{ marginRight: "auto" }} />
          <Typography
            sx={{
              font: "Readex Pro",
              fontWeight: "400",
              fontSize: "1.5rem",
              marginRight: "auto",
              marginBottom:"20px",
            }}
          >
            Smart Job
          </Typography>
          {isMatch ? (
            <></>
          ) : (
            <>
              <Tabs
                sx={{
                  font: "Poppins",
                  fontWeight: "400",
                  marginRight: "auto",
                }}
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Jobs" />
                <Tab label="Companies" />
                <Tab label="Services" />
                <Tab label="User Profile" />
              </Tabs>
              <Button
                sx={{
                  marginRight: "auto",
                  borderRadius: "20px",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              >
                Register
              </Button>
              <Button
                sx={{
                  marginRight: "auto",
                  borderRadius: "20px",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box component="main" >
        <Container>
          <Typography variant="h4" sx={heading}>
            Page You Are Looking For Is Not Found!
          </Typography>
          <div className="image">
            <img src={error} alt="No Preview" />
          </div>

          <div className="btn">
            <Button type="submit" variant="contained" sx={button}>
              Go To Previous Page
            </Button>
            <Button type="submit" variant="contained" sx={button}>
              Go To Home Page
            </Button>
          </div>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default PageNotFound;
