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
// import Axios from "../../../utils/Axios";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Footer from "../../../partials/Footer";
import classes from "./JobSeeker.module.css";
/*========== Images ============ */
import img1 from "../../../assets/img/users/User.jpg";
import img2 from "../../../assets/img/users/main.jpg";
import img3 from "../../../assets/img/users/Slack.jpg";
import img4 from "../../../assets/img/users/Samsung.jpg";
import Colors from "../../../utils/colors";

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
  color: Colors.palette.primary.main,
  borderRadius: "25px",
  margin: "10px",
  padding: "8px 16px",
  border: "1px solid #6973FE",
  height: "55px",
  width: "100%",
};

const searchBarStylesResponsive = {
  height: "auto",
  width: "auto",
};

const iconContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const labelStyles = {
  color: Colors.palette.background.main,
};

const buttonStyles = {
  width: { xs: "100%", md: "200px" },
  display: "flex",
  height: "40px",
  borderRadius: "30px",
  backgroundColor: Colors.palette.color.textColor,
  fontSize: "18px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  textTransform: "capitalize",
  color: Colors.palette.primary.main,
  marginRight: "10px",
  "&:hover": {
    color: Colors.palette.background.card,
    backgroundColor: Colors.palette.background.text,
    justifyContent: { sm: "center" },
  },
};

const buttonStyles1 = {
  width: { xs: "100%", md: "200px" },
  height: "40px",
  borderRadius: "50px",
  backgroundColor: Colors.palette.color.textColor,
  fontSize: "18px",
  color: Colors.palette.primary.main,
  marginTop: "20px",
  "&:hover": {
    color: Colors.palette.background.text,
    backgroundColor: Colors.palette.background.card,
  },
  textTransform: "capitalize ",
};

const buttonstyle2Responsive = {
  width: "auto",
  height: "30px",
  borderRadius: "30px",
  backgroundColor: Colors.palette.color.textColor,
  fontSize: "12px",
  color: Colors.palette.primary.main,
  marginTop: "20px",
  "&:hover": {
    color: Colors.palette.background.text,
    backgroundColor: Colors.palette.background.card,
  },
  textTransform: "capitalize ",
  fontWeight: "600",
};

const buttonstyle3Responsive = {
  width: "auto",
  height: "20px",
  borderRadius: "30px",
  backgroundColor: Colors.palette.background.text,
  fontSize: "10px",
  color: Colors.palette.primary.main,
  marginTop: "20px",
  "&:hover": {
    color: Colors.palette.background.text,
    backgroundColor: Colors.palette.background.card,
  },
  textTransform: "capitalize ",
  fontWeight: "600",
};

const dividerStyles = {
  backgroundColor: Colors.palette.background.default,
  height: "100%",
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
      {/* <Navbar/> */}

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
                label="Job Title/Role/Skills"
                variant="outlined"
                size="small"
                fullWidth={!isSmallScreen}
                InputLabelProps={{ style: labelStyles }}
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
                InputLabelProps={{ style: labelStyles }}
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
                InputLabelProps={{ style: labelStyles }}
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
            <Search />
            Search
          </Button>
        </Box>
      </Box>

      {/*============ MAIN CONTENT ==============*/}
      <Container>
        <Grid container spacing={isExtraSmallScreen ? 2 : 3}>
          {/*============ COLUMN 1 ==============*/}
          <Grid item md={3}>
            <Box>
              <div className={classes["text"]}>
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

              <div
                className={classes["block1CLM1"]}
                style={{
                  color: Colors.palette.background.text,
                  backgroundColor: Colors.palette.background.card,
                }}
              >
                <h4>Profile Performance</h4>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box className={classes["marginClass"]}>
                      Search appearances
                    </Box>
                    <Box className={classes["marginClass"]}>0</Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className={classes["marginClass"]}>
                      Recruiter actions
                    </Box>
                    <Box className={classes["marginClass"]}>0</Box>
                  </Grid>
                </Grid>
              </div>

              <div
                className={classes["block2CLM1"]}
                style={{
                  color: Colors.palette.background.text,
                  backgroundColor: " #F5F5F5",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2}>
                    <Box className={classes["iconsResponsive"]}>
                      <HomeOutlinedIcon className={classes["marginClass"]} />
                      <WorkOutlineOutlinedIcon
                        className={classes["marginClass"]}
                      />
                      <LocationCityOutlinedIcon
                        className={classes["marginClass"]}
                      />
                      <NewspaperOutlinedIcon
                        className={classes["marginClass"]}
                      />
                    </Box>
                  </Grid>

                  <Grid item md={10}>
                    <Box className={classes["marginClass"]}>Home</Box>
                    <Box className={classes["marginClass"]}>Jobs</Box>
                    <Box className={classes["marginClass"]}>Companies</Box>
                    <Box className={classes["marginClass"]}>Blogs</Box>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
          {/*============ COLUMN 2 ==============*/}
          <Grid item md={isSmallScreen ? 12 : 6}>
            <Box>
              <div
                className={classes["block1CLM2"]}
                style={{ backgroundColor: Colors.palette.background.card }}
              ></div>
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
                    backgroundColor: Colors.palette.background.text,
                    fontSize: "18px",
                    color: Colors.palette.primary.main,
                    marginTop: "20px",
                    padding: "25px",
                    "&:hover": {
                      color: Colors.palette.background.card,
                      backgroundColor: Colors.palette.background.text,
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
                    backgroundColor: Colors.palette.background.text,
                    fontSize: "18px",
                    color: Colors.palette.primary.main,
                    marginTop: "20px",
                    padding: "25px",
                    "&:hover": {
                      color: Colors.palette.background.card,
                      backgroundColor: Colors.palette.background.text,
                    },
                    textTransform: "capitalize ",
                    ...(isSmallScreen && buttonstyle3Responsive),
                  }}
                >
                  View all
                </Button>
              </Grid>
            </Grid>

            <Box
              className={classes["block2CLM2"]}
              Style={{ backgroundColor: Colors.palette.background.card }}
            >
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Box
                    className={classes["block2CLM2Box"]}
                    style={{ backgroundColor: Colors.palette.background.text }}
                  >
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
                  <Box
                    className={classes["block2CLM2Box"]}
                    style={{ backgroundColor: Colors.palette.background.text }}
                  >
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

            <Box className={classes["block3CLM2"]}>
              <span>Banner</span>
            </Box>
          </Grid>
          {/*============ COLUMN 3 ==============*/}
          <Grid item md={3}>
            <Box
              className={classes["block1CLM3"]}
              style={{ backgroundColor: Colors.palette.background.card }}
            >
              <p style={{ color: Colors.palette.background.text }}>
                Do you need help introducing yourself confidently in interviews?
              </p>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  width: "auto",
                  height: "10px",
                  borderRadius: "50px",
                  backgroundColor: Colors.palette.background.text,
                  fontSize: "14px",
                  color: Colors.palette.primary.main,
                  marginTop: "10px",
                  padding: "20px",
                  "&:hover": {
                    color: Colors.palette.background.card,
                    backgroundColor: Colors.palette.background.text,
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
                  backgroundColor: Colors.palette.background.text,
                  fontSize: "14px",
                  color: Colors.palette.primary.main,
                  marginTop: "10px",
                  padding: "20px",
                  "&:hover": {
                    color: Colors.palette.background.card,
                    backgroundColor: Colors.palette.background.text,
                  },
                  ...(isSmallScreen && buttonstyle2Responsive),
                }}
              >
                Yes, I need help
              </Button>
            </Box>

            <Box
              className={classes["block2CLM3"]}
              style={{ backgroundColor: Colors.palette.background.text }}
            >
              <span>Banner</span>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/*============ FOOTER ==============*/}
      <Box
        sx={{ mt: { md: "10%", xl: "10%", lg: "10%", sm: "20%", xs: "20%" } }}
      >
        <Footer />
      </Box>
      {/* <Footer/> */}
    </>
  );
};

export default JobSeeker;
