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
  Container,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import DrawerComp from "../../../partials/Drawer";
import Axios from "../../../utils/axios";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Footer from"../../../partials/Footer";
import "./JobSeeker.css";

/*========== Images ============ */
import img1 from "../../../assets/img/users/User.jpg";
import img2 from "../../../assets/img/users/main.jpg";
import img3 from "../../../assets/img/users/Slack.jpg";
import img4 from "../../../assets/img/users/Samsung.jpg";




const image1Styles = {
  width: "117px",
  height: "117px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
};

const image2Styles = {
  width: "25%",
  height: "auto",
  border: "1px solid black",
  borderRadius: "50%",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
};

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  borderRadius: "25px",
  margin: "10px",
  padding: "8px 16px",
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

const buttonStyles = {
  width: { xs: "100%", md: "200px" },
  height: "40px",
  borderRadius: "50px",
  backgroundColor: "#CCFFCC",
  fontSize: "18px",
  color: "black",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
  textTransform: "capitalize ",
};

const buttonStyles1 = {
  width: { xs: "100%", md: "200px" },
  height: "40px",
  borderRadius: "50px",
  backgroundColor: "#CCFFCC",
  fontSize: "18px",
  color: "black",
  marginTop: "20px",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
  textTransform: "capitalize ",
};

const buttonstyle2Responsive = {
  width: "auto",
  height: "30px",
  borderRadius: "30px",
  backgroundColor: "#CCFFCC",
  fontSize: "12px",
  color: "black",
  marginTop: "20px",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
  textTransform: "capitalize ",
  fontWeight: "600",
};

const buttonstyle3Responsive = {
  width: "auto",
  height: "20px",
  borderRadius: "30px",
  backgroundColor: "white",
  fontSize: "10px",
  color: "black",
  marginTop: "20px",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
  textTransform: "capitalize ",
  fontWeight: "600",
};

const dividerStyles = {
  backgroundColor: "#6973FE",
  height: "55px",
};

const JobSeeker = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  const isExtraSmallScreen = useMediaQuery("(max-width: 600px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const JobSeeker = async () => {
  // setLoading(true);
  //   try {
  //     const response = await Axios.post("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally{
  //     setLoading(false);
  //    }
  // };

  // useEffect(() => {
  //   JobSeeker();
  // }, []);

  return (
    <>
      <AppBar
        sx={{
          background: "#6973FE",
          boxShadow: "none",
          position: "static",
          marginBottom: "8px",
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
        <Grid>
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
        <Button
          type="submit"
          variant="contained"
          sx={{ ...buttonStyles, ...(isSmallScreen && buttonstyle2Responsive) }}
        >
          Search
        </Button>
      </Box>

      {/*============ MAIN CONTENT ==============*/}
      <Container>
        <Grid container spacing={isExtraSmallScreen ? 2 : 3}>
          {/*============ COLUMN 1 ==============*/}
          <Grid item md={3}>
            <Box>
              <div className="text">
                <Box
                  component="img"
                  src={img1}
                  alt="Profile Photo"
                  sx={{
                    ...image1Styles,

                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />
                <h3>Lorem Ipsum</h3>
                <h4>Graphic Designer and Team Lead @ spirale</h4>
                <h5>Last updated today</h5>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ...buttonStyles1,
                    ...(isSmallScreen && buttonstyle2Responsive),
                  }}
                >
                  Complete Profile
                </Button>
              </div>

              <div class="block1CLM1">
                <h4>Profile Performance</h4>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box className="marginClass">Search appearances</Box>
                    <Box className="marginClass">0</Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="marginClass">Recruiter actions</Box>
                    <Box className="marginClass">0</Box>
                  </Grid>
                </Grid>
              </div>

              <div className="block2CLM1">
                <Grid container spacing={2}>
                  <Grid item md={2}>
                    <Box className="iconsResponsive">
                    <HomeOutlinedIcon className="marginClass" />
                    <WorkOutlineOutlinedIcon className="marginClass" />
                    <LocationCityOutlinedIcon className="marginClass" />
                    <NewspaperOutlinedIcon className="marginClass" />
                    </Box>
                    
                  </Grid>

                  <Grid item md={10}>
                    <Box className="marginClass">Home</Box>
                    <Box className="marginClass">Jobs</Box>
                    <Box className="marginClass">Companies</Box>
                    <Box className="marginClass">Blogs</Box>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
          {/*============ COLUMN 2 ==============*/}
          <Grid item md={isSmallScreen ? 12 : 6}>
            <Box>
              <div className="block1CLM2"></div>
            </Box>

            <Grid container spacing={2}>
              <Grid item md={8}>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    width: "auto",
                    height: "40px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    fontSize: "18px",
                    color: "black",
                    marginTop: "20px",
                    padding: "25px",
                    "&:hover": {
                      color: "#7797FE",
                      backgroundColor: "white",
                    },
                    textTransform: "capitalize ",
                    ...(isSmallScreen && buttonstyle3Responsive),
                  }}
                >
                  02 Recommended Jobs
                </Button>
              </Grid>
              <Grid item md={4}>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    width: "auto",
                    height: "40px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    fontSize: "18px",
                    color: "black",
                    marginTop: "20px",
                    padding: "25px",
                    "&:hover": {
                      color: "#7797FE",
                      backgroundColor: "white",
                    },
                    textTransform: "capitalize ",
                    ...(isSmallScreen && buttonstyle3Responsive),
                  }}
                >
                  View all
                </Button>
              </Grid>
            </Grid>

            <Box className="block2CLM2">
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Box className="block2CLM2Box">
                    <Box
                      component="img"
                      src={img3}
                      alt="Profile Photo"
                      sx={{ ...image2Styles }}
                    />
                    <span style={{ float: "right" }}>20h ago</span>
                    <h4>Web Graphics Designer</h4>
                    <span style={{ fontWeight: "500" }}>
                      Lorem Ipsum Technosoft <br />
                    </span>
                    <span style={{ fontWeight: "500" }}>
                      <LocationOnOutlinedIcon />
                      Noida
                    </span>
                  </Box>
                </Grid>

                <Grid item md={6}>
                  <Box className="block2CLM2Box">
                    <Box
                      component="img"
                      src={img4}
                      alt="Profile Photo"
                      sx={{ ...image2Styles }}
                    />
                    <span style={{ float: "right" }}>12h ago</span>
                    <h4>Graphics Designer</h4>
                    <span style={{ fontWeight: "500" }}>
                      Lorem Ipsum Technosoft <br />
                    </span>
                    <span style={{ fontWeight: "500" }}>
                      {" "}
                      <LocationOnOutlinedIcon />
                      Noida
                    </span>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className="block3CLM2">
              <span>Banner</span>
            </Box>
          </Grid>
          {/*============ COLUMN 3 ==============*/}
          <Grid item md={3}>
            <Box className="block1CLM3">
              <p style={{ color: "white" }}>
                Do you need help introducing yourself confidently in interviews?
              </p>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  width: "auto",
                  height: "10px",
                  borderRadius: "50px",
                  backgroundColor: "white",
                  fontSize: "14px",
                  color: "black",
                  marginTop: "10px",
                  padding: "20px",
                  "&:hover": {
                    color: "#7797FE",
                    backgroundColor: "white",
                  },
                  ...(isSmallScreen && buttonstyle2Responsive),
                }}
              >
                No, I dont't need help
              </Button>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  width: "auto",
                  height: "10px",
                  borderRadius: "50px",
                  backgroundColor: "white",
                  fontSize: "14px",
                  color: "black",
                  marginTop: "10px",
                  padding: "20px",
                  "&:hover": {
                    color: "#7797FE",
                    backgroundColor: "white",
                  },
                  ...(isSmallScreen && buttonstyle2Responsive),
                }}
              >
                Yes, I need help
              </Button>
            </Box>

            <Box className="block2CLM3">
              <span>Banner</span>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/*============ FOOTER ==============*/}
      <Footer/>
    </>
  );
};

export default JobSeeker;
