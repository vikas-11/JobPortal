import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  useMediaQuery,
  //useTheme,
  Box,
  Divider,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import Colors from "../../../utils/colors";
import ArrowDropDown from "@mui/icons-material/KeyboardArrowDown";
import Footer from "../../../partials/Footer";
// import Axios from '../../../utils/Axios';

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
  // width: { xs: "100%", md: "200px" },
  // height: "40px",
  // borderRadius: "50px",
  // backgroundColor: Colors.palette.primary.backgroundjob,
  // fontSize: "18px",
  // color: Colors.palette.primary.main,
  // marginRight: "10px",
  // "&:hover": {
  //   color: Colors.palette.primary.color,
  //   backgroundColor: Colors.palette.background.card,
  // },
  // textTransform: "capitalize ",
  // fontWeight: "600",
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

const dividerStyles = {
  backgroundColor: Colors.palette.background.default,
  height: "100%",
};

const layoutStyles = {
  width: "auto",
  height: "69px",
  borderRadius: "34.5px",
  display: "flex",
  alignItems: "center",
  margin: "10px",
  padding: "0 16px",
  color: Colors.palette.background.default,
  border: "1px solid",
  justifyContent: "space-evenly",
  fontWeight: "600",
};

const layoutStylesResponsive = {
  height: "auto",
  width: "auto",
};

const smallLayoutStyles = {
  width: "auto",
  height: "2.6rem",
  borderRadius: "31px",
  fontSize: "14px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
};

const smallLayoutStylesResponsive = {
  padding: "0 12px",
  marginBottom: "5px",
};

const arrowDownStyles = {
  color: Colors.palette.primary.main,
};

const layoutStyles2 = {
  width: "auto",
  height: "80px",
  borderRadius: "42px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  justifyContent: "space-between",
  paddingInline: "20px",
  margin: "30px",
  color: Colors.palette.background.default,
};

const JobDetails = () => {
  const [value, setValue] = useState();
  //const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");

  // const [loading, setLoading] = useState(false);
  //   const [data, setData] = useState([]);

  //   const JobDetails = async () => {
  //   setLoading(true);
  //     try {
  //       const response = await Axios.post("/");
  //       setData(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally{
  //       setLoading(false);
  //      }
  //   };

  //   useEffect(() => {
  //     JobDetails();
  //   }, []);

  return (
    <>
      <Box
        component="form"
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

        <Box
          sx={{
            marginRight: isSmallScreen ? "30%" : "0px",
            marginTop: isSmallScreen ? "10px" : "0px",
          }}
        >
          <Button type="submit" variant="contained" sx={buttonStyles}>
            <Search />
            Search
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          ...layoutStyles,
          ...(isSmallScreen && layoutStylesResponsive),
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          // sx={{
          // display: "flex",
          // alignItems: "center",
          // marginRight: isSmallScreen ? "0" : "10px",
          // marginBottom: isSmallScreen ? "10px" : "0",
          // width: isSmallScreen ? "100%" : "auto",
          // flex: "1",
          display="inline-block"
          maxWidth="70%"
          whiteSpace="nowrap"
          overflow="inherit"
          // textOverflow="ellipsis"
          // bgcolor="#f5f5f5" // Background color for the box
          // // p={1} // Padding to create space around the content

          // }}
        >
          <Typography
            variant="h6"
            component="span"
            style={{
              color: Colors.palette.background.default,
              fontWeight: "600", //whiteSpace: "nowrap",
              //overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Job Search
          </Typography>
          <ArrowDropDown style={arrowDownStyles} />
        </Box>
        <Divider
          orientation={isSmallScreen ? "horizontal" : "vertical"}
          sx={{
            width: isSmallScreen ? "100%" : "1px",
            height: isSmallScreen ? "1px" : "70px",
            marginBottom: isSmallScreen ? "10px" : "0",
            marginLeft: isSmallScreen ? "0" : "16px",
          }}
        />
        <Grid
          container
          spacing={1}
          sx={{
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
          }}
        >
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span
                style={{
                  color: Colors.palette.primary.main,
                  whiteSpace: "nowrap",
                }}
              >
                Quick Apply
              </span>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span
                style={{
                  color: Colors.palette.primary.main,
                  whiteSpace: "nowrap",
                }}
              >
                Location
              </span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: Colors.palette.primary.main }}>
                Experience
              </span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: Colors.palette.primary.main }}>Salary</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: Colors.palette.primary.main }}>
                Function
              </span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: Colors.palette.primary.main }}>Role</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span
                style={{
                  color: Colors.palette.primary.main,
                  whiteSpace: "nowrap",
                }}
              >
                Job Type
              </span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span
                style={{
                  color: Colors.palette.primary.main,
                  whiteSpace: "nowrap",
                }}
              >
                Job Freshness
              </span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span
                style={{
                  color: Colors.palette.primary.main,
                  whiteSpace: "nowrap",
                }}
              >
                All Filters
              </span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: Colors.palette.primary.main }}>
                Reset All
              </span>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* xs={isSmallScreen ? 12 : 6} */}
      <Grid container spacing={2}>
        <Grid item xs={isSmallScreen ? 12 : 6}>
          {/* Content for the left side */}
          <Box sx={layoutStyles2}>
            <Typography
              style={{
                color: Colors.palette.primary.main,
                marginRight: "8px",
                fontWeight: "500",
              }}
            >
              Send me Jobs for this Search
            </Typography>
            <Switch style={{ color: Colors.palette.background.default }} />
          </Box>
          <Typography style={{ marginLeft: "46px", marginTop: "10px" }}>
            Showing 30 results for "Graphic Designer"
          </Typography>

          {/* Box 1 */}
          {/* <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box> */}
          <Card
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent sx={{ margin: "20px" }}>
              <Typography variant="h6">Animator</Typography>
              <Typography>KEYWORDS STUDIOS</Typography>
              <br />
              <Typography>Full time</Typography>
              <Typography>Gurgaon / Gurugram, India</Typography>
              <Typography>0-0 INR</Typography>
              <br />
              <Typography>13 days ago</Typography>
            </CardContent>
          </Card>

          {/* commit */}
          {/* <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box> */}
          {/* Hii how are you */}
          <Card
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent sx={{ margin: "20px" }}>
              <Typography variant="h6">Animator</Typography>
              <Typography>KEYWORDS STUDIOS</Typography>
              <br />
              <Typography>Full time</Typography>
              <Typography>Gurgaon / Gurugram, India</Typography>
              <Typography>0-0 INR</Typography>
              <br />
              <Typography>13 days ago</Typography>
            </CardContent>
          </Card>

          {/* <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box> */}
          <Card
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent sx={{ margin: "20px" }}>
              <Typography variant="h6">Animator</Typography>
              <Typography>KEYWORDS STUDIOS</Typography>
              <br />
              <Typography>Full time</Typography>
              <Typography>Gurgaon / Gurugram, India</Typography>
              <Typography>0-0 INR</Typography>
              <br />
              <Typography>13 days ago</Typography>
            </CardContent>
          </Card>

          {/* <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box> */}
          <Card
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent sx={{ margin: "20px" }}>
              <Typography variant="h6">Animator</Typography>
              <Typography>KEYWORDS STUDIOS</Typography>
              <br />
              <Typography>Full time</Typography>
              <Typography>Gurgaon / Gurugram, India</Typography>
              <Typography>0-0 INR</Typography>
              <br />
              <Typography>13 days ago</Typography>
            </CardContent>
          </Card>
          {/* 
          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box> */}
          <Card
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent sx={{ margin: "20px" }}>
              <Typography variant="h6">Animator</Typography>
              <Typography>KEYWORDS STUDIOS</Typography>
              <br />
              <Typography>Full time</Typography>
              <Typography>Gurgaon / Gurugram, India</Typography>
              <Typography>0-0 INR</Typography>
              <br />
              <Typography>13 days ago</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={isSmallScreen ? 12 : 6}>
          {/* Content for the right side */}
          <Box sx={layoutStyles2} style={{ width: "auto" }}>
            <Typography
              style={{ color: Colors.palette.primary.main, marginRight: "8px" }}
            >
              Animator <br /> KEYWORDS STUDIOS
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={buttonStyles}
              style={{ width: "auto", fontSize: "14px" }}
            >
              Apply Now
            </Button>
          </Box>

          <Box
            sx={{
              ml: { xs: "-10%", sm: "0px", md: "0px", xl: "0px", lg: "0px" },
            }}
          >
            <Box
              style={{
                width: "90%",
                maxWidth: "600px",
                height: "auto",
                border: "1px solid #7797FE",
                borderRadius: "54px",
                margin: "30px",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "10px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                gap: "10px",
                ml: {
                  xs: "-50%",
                  sm: "none",
                  md: "none",
                  xl: "none",
                  lg: "none",
                },
              }}
            >
              <Typography variant="p">Highlights</Typography>&nbsp;
              <Typography variant="p">Job Description</Typography>
              <Typography variant="p"> More Info</Typography>
              <Typography variant="p"> Recruiter Information</Typography>
            </Box>
          </Box>
          {/* <Box
            style={{
              width: "auto",
              height: "165px",
              backgroundColor: Colors.palette.background.card,
              borderRadius: "17px",
              margin: "30px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingInline: "10px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "18px",
            }}
          >
            Gurgaon / Gurugram, India
            <br /> 0 - 0 Years <br /> 13 days ago <br /> 2 Applied
          </Box> */}
          <Card
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: Colors.palette.background.card,
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              Gurgaon / Gurugram, India
              <br /> 0 - 0 Years <br /> 13 days ago <br /> 2 Applied
            </CardContent>
          </Card>

          <Box
            style={{
              width: "90%",
              height: "auto",
              backgroundColor: Colors.palette.primary.backgroundjob,
              borderRadius: "17px",
              margin: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              gap: "5px",
              fontWeight: "600",
            }}
          >
            <p style={{ textAlign: "center" }}>
              Get notified for jobs based on your search when they are posted
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: Colors.palette.background.card,
                  marginRight: "10px",
                }}
              >
                Send Similar Jobs
              </p>
              <Switch />
            </div>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "40px",
                    marginBottom: "8px",
                  }}
                >
                  Job Description:
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Able to work in good coordination with production managers
                  and engineers.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Capable of generating new ideas.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Should have hands-on experience with Photoshop and
                  Illustrator.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Should have experience with logo design, corporate brand
                  identity design, web UI
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Identify and troubleshoot UX problems.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Discuss the idea with the internal team.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Knowledge about style standards on fonts, colors, and
                  images.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Develop UI mockups and prototypes.
                </p>
              </Grid>
            </Grid>
          </Box>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              marginLeft: "40px",
              marginBottom: "8px",
            }}
          >
            Scope of the Role:
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "40px",
              marginBottom: "4px",
              marginRight: "90px",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic a
            cumque impedit ea repellendus, enim, eos doloribus doloremque veniam
            eius exercitationem eaque tenetur similique quidem assumenda harum
            obcaecati, dolorum possimus esse! Ullam quas temporibus odio libero
            nulla, enim repudiandae rerum?
          </p>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              marginLeft: "40px",
              marginBottom: "8px",
            }}
          >
            Requirements:
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "40px",
              marginBottom: "4px",
              marginRight: "90px",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic a
            cumque impedit ea repellendus, enim, eos doloribus doloremque veniam
            eius exercitationem eaque tenetur similique quidem assumenda harum
            obcaecati, dolorum possimus esse! Ullam quas temporibus odio libero
            nulla <br />
            enim repudiandae rerum? Hic a cumque impedit ea repellendus, enim,
            eos doloribus doloremque veniam eius exercitationem eaque tenetur
            similique quidem assumenda harum obcaecati, dolorum possimus esse!
            Ullam quas temporibus odio libero nulla, enim repudiandae rerum?
          </p>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              marginLeft: "40px",
              marginBottom: "8px",
            }}
          >
            More Info:
          </p>
          <Box
            style={{
              width: "auto",
              height: "178px",
              borderRadius: "17px",
              backgroundColor: Colors.palette.background.card,
              paddingLeft: "20px",
              paddingTop: "17px",
              margin: "30px",
              color: Colors.palette.primary.color,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            JOB TYPE <br /> Permanent Job
            <br />
            <br />
            INDUSTRY
            <br /> IT/Computers - Software
            <br />
            <br /> FUNCTION
            <br /> Art
          </Box>

          <Box
            style={{
              fontSize: "14px",
              width: "auto",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "27px",
            }}
          >
            <p>
              About
              <br />
              KEYWORDS STUDIOS
              <br />
              Job Source: <a href="/">apply.workable.com</a>
            </p>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "auto", md: "70px" },
                height: "35px",
                borderRadius: "15px",
                backgroundColor: Colors.palette.primary.backgroundjob,
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: Colors.palette.primary.main,
                marginRight: "6%",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: Colors.palette.primary.color,
                  backgroundColor: Colors.palette.background.card,
                },
              }}
            >
              Follow
            </Button>
          </Box>

          <p
            style={{
              width: "auto",
              fontSize: "14px",
              marginLeft: "30px",
              marginBottom: "30px",
              marginRight: "90px",
              marginTop: "15px",
            }}
          >
            {" "}
            Keywords Studios plc is an Irish video game industry services
            company based in Leopardstown. Founded in 1998 by Giorgio Guastalla
            and Teresa Luppino, the company initially provided localisation
            services for business software before transitioning to the video
            game industry.
            <br />
            <br />
            <span style={{ fontWeight: "400" }}>
              Job ID: ...................
            </span>
          </p>

          <Box
            style={{
              fontSize: "14px",
              display: "flex",
              margin: "30px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "100%", md: "70px" },
                height: "35px",
                borderRadius: "15px",
                backgroundColor: Colors.palette.primary.backgroundjob,
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: Colors.palette.primary.main,
                marginRight: "10px",
                marginLeft: "35%",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: Colors.palette.primary.color,
                  backgroundColor: Colors.palette.background.card,
                },
              }}
            >
              Save
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "100%", md: "70px" },
                height: "35px",
                borderRadius: "15px",
                backgroundColor: Colors.palette.primary.backgroundjob,
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: Colors.palette.primary.main,
                marginRight: "100%",
                //marginLeft:"35%",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: Colors.palette.primary.color,
                  backgroundColor: Colors.palette.background.card,
                },
              }}
            >
              Report
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/*============ FOOTER ==============*/}
      <Footer />
    </>
  );
};

export default JobDetails;
