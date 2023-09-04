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
  Divider,
  Grid,
  TextField,
  Paper,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import DrawerComp from "../../../partials/Drawer";
import "../../../partials/Footer.css";
import Footer from "../../../partials/Footer";
import Axios from "../../../utils/axios";

const layoutStyles = {
  width: "auto",
  height: "auto",
  borderRadius: "40px",
  border: "1px solid #6973FE",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
};

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  borderRadius: "25px",
  margin: "10px",
  padding: "8px 16px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  border: "1px solid #6973FE",
  height: "40px",
};

const searchBarStylesResponsive = {
  height: "auto",
  width: "auto",
};

const iconContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const navBarStyles = {
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  paddingBlock: "20px",
  paddingInline: "auto",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  marginBottom: "30px",
};

const navBarStylesResponsive = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  padding: "16px",
  fontSize: "10px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  marginBottom: "30px",
  marginInline: "auto",
  marginTop: "10px",
  gap: "15px",
  textAlign: "left",
  paddingLeft: "10px",
};

const companyLayoutStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginInline: "155px",
  maxWidth: "3000px",
  marginTop: "30px",
  marginBottom: "50px",
};

const companyLayoutStylesResponsive = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "16px",
  maxWidth: "3000px",
  marginTop: "40px",
  marginBottom: "20px",
};

const titleStyles = {
  color: "#6973FE",
};

const contentStyles = {
  display: "flex",
  flexDirection: "column",
  fontWeight: "600",
};

const buttonStyles = {
  width: { xs: "100%", md: "225px" },
  height: "40px",
  borderRadius: "30px",
  backgroundColor: "#CCFFCC",
  fontSize: "20px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  textTransform: "capitalize",
  color: "black",
  marginRight: "10px",
  "&:hover": {
    color: "#7797FE",
    backgroundColor: "white",
  },
};

const linkStyles = {
  textDecoration: "none",
  fontSize: "24px",
  color: "#6973FE",
};

const dividerStyles = {
  backgroundColor: "#6973FE",
  height: "55px",
};

const CompanyNames = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const CompanyName = async () => {
  // setLoading(true);
  //   try {
  //     const response = await Axios.get("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally{
  //     setLoading(false);
  //    }
  // };

  // useEffect(() => {
  //   CompanyName();
  // }, []);

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
              fontSize: "2rem",
              marginRight: "auto",
              marginBottom: "8px",
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
      {/* Search Bar */}
      <Box
        component="form" // Form element to handle form submission
        sx={{
          ...searchBarStyles,
          ...(isSmallScreen && searchBarStylesResponsive),
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        {/* Search Input */}
        <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
          <Box sx={iconContainerStyles}>
            <Search />
            <TextField
              label="Skill/Designations/Companies"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Divider orientation="vertical" sx={dividerStyles} />
        )}
        {/* Location Input */}
        <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
          <Box sx={iconContainerStyles}>
            <LocationOn />
            <TextField
              label="Location"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Divider orientation="vertical" sx={dividerStyles} />
        )}
        {/* Experience Input */}
        <Grid item>
          <Box sx={iconContainerStyles}>
            <WorkOutline />
            <TextField
              label="Experience"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Divider orientation="vertical" sx={dividerStyles} />
        )}
        {/* Submit Button */}
        <Button type="submit" variant="contained" sx={buttonStyles}>
          Search
        </Button>
      </Box>

      {/* Navigation Bar */}
      <Box
        sx={(theme) => ({
          ...navBarStyles,
          [theme.breakpoints.down("sm")]: {
            ...navBarStylesResponsive,
          },
        })}
      >
        {/* Navigation links */}

        <a href="/" style={linkStyles}>
          Companies
        </a>
        <a href="/" style={linkStyles}>
          Skill
        </a>
        <a href="/" style={linkStyles}>
          Designation
        </a>
        <a href="/" style={linkStyles}>
          Category
        </a>
        <a href="/" style={linkStyles}>
          Cities
        </a>
        <a href="/" style={linkStyles}>
          Other Jobs
        </a>
      </Box>

      {/* Company Layout */}
      <Box
        sx={(theme) => ({
          ...companyLayoutStyles,
          [theme.breakpoints.down("sm")]: {
            ...companyLayoutStylesResponsive,
          },
        })}
      >
        <Grid container rowSpacing={6} columnSpacing={8}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper elevation={3} sx={{ ...layoutStyles }}>
              <div style={contentStyles}>
                <h1 style={titleStyles}>Jobs by Top Companies</h1>
                <p>Adani Power jobs</p>
                <p>Aditya Birla Capital Jobs</p>
                <p>Air asia jobs</p>
                <p>Air india jobs</p>
                <p>Allahabad bank jobs</p>
                <p>Amazon jobs</p>
                <p>Amuk jobs</p>
              </div>
              <Typography sx={{ marginTop: "25px" }}>view all</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper
              elevation={3}
              sx={{
                ...layoutStyles,
                backgroundColor: "#7797FE",
                color: "white",
              }}
            >
              <div style={contentStyles}>
                <h1>Jobs by Skills</h1>
                <p>Adani Power jobs</p>
                <p>Aditya Birla Capital Jobs</p>
                <p>Air asia jobs</p>
                <p>Air india jobs</p>
                <p>Allahabad bank jobs</p>
                <p>Amazon jobs</p>
                <p>Amuk jobs</p>
              </div>
              <Typography sx={{ marginTop: "25px" }}>view all</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper
              elevation={3}
              sx={{
                ...layoutStyles,
                backgroundColor: "#7797FE",
                color: "white",
              }}
            >
              <div style={contentStyles}>
                <h1>Jobs by Top Designation</h1>
                <p>Adani Power jobs</p>
                <p>Aditya Birla Capital Jobs</p>
                <p>Air asia jobs</p>
                <p>Air india jobs</p>
                <p>Allahabad bank jobs</p>
                <p>Amazon jobs</p>
                <p>Amuk jobs</p>
              </div>
              <Typography sx={{ marginTop: "25px" }}>view all</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper elevation={3} sx={{ ...layoutStyles }}>
              <div style={contentStyles}>
                <h1 style={titleStyles}>Jobs by top Category</h1>
                <p>Adani Power jobs</p>
                <p>Aditya Birla Capital Jobs</p>
                <p>Air asia jobs</p>
                <p>Air india jobs</p>
                <p>Allahabad bank jobs</p>
                <p>Amazon jobs</p>
                <p>Amuk jobs</p>
              </div>
              <Typography sx={{ marginTop: "25px" }}>view all</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper elevation={3} sx={{ ...layoutStyles }}>
              <div style={contentStyles}>
                <h1 style={titleStyles}>Jobs by Top Cities</h1>
                <p>Adani Power jobs</p>
                <p>Aditya Birla Capital Jobs</p>
                <p>Air asia jobs</p>
                <p>Air india jobs</p>
                <p>Allahabad bank jobs</p>
                <p>Amazon jobs</p>
                <p>Amuk jobs</p>
              </div>
              <Typography sx={{ marginTop: "25px" }}>view all</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper
              elevation={3}
              sx={{
                ...layoutStyles,
                backgroundColor: "#7797FE",
                color: "white",
              }}
            >
              <div style={contentStyles}>
                <h1>Aditya Birla Capital Jobs</h1>
                <p>Air asia jobs</p>
                <p>Air india jobs</p>
                <p>Allahabad bank jobs</p>
                <p>Amazon jobs</p>
                <p>Amuk jobs</p>
                <p>Allahabad bank jobs</p>
                <p>Adani Power jobs</p>
              </div>
              <Typography sx={{ marginTop: "25px" }}>view all</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/*============ FOOTER ==============*/}
      <Footer />
    </>
  );
};

export default CompanyNames;
