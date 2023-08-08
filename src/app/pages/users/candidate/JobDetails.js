import React, { useState } from "react";
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
  Switch,
  TextField,
  Container,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import ArrowDropDown from "@mui/icons-material/KeyboardArrowDown";
import DrawerComp from "../../../partials/Drawer";
import Footer from"../../../partials/Footer";

/*========== CSS FILE ============ */

import "../../../assets/css/JobDetails.css";

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
  marginRight: "10px",
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

const layoutStyles = {
  width: "auto",
  height: "69px",
  borderRadius: "34.5px",
  display: "flex",
  alignItems: "center",
  margin: "10px",
  padding: "0 16px",
  color: "#6973FE",
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
  height: "34px",
  borderRadius: "31px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 12px",
};

const smallLayoutStylesResponsive = {
  padding: "0 12px",
  marginBottom: "5px",
};

const arrowDownStyles = {
  color: "black",
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
  color: "#6973FE",
};

const JobDetails = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

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

      {/* Layout */}
      <Box
        sx={{
          ...layoutStyles,
          ...(isSmallScreen && layoutStylesResponsive),
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#6973FE", fontWeight: "600" }}
          >
            Job Search
          </Typography>
          <ArrowDropDown style={arrowDownStyles} />
        </Box>
        <Divider
          orientation="vertical"
          sx={{ height: "34px", margin: "0 16px" }}
        />
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Quick Apply</span>
        </Box>
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Location</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Experience</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Salary</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Function</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Role</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Job Type</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Job Freshness</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>All Filters</span>
          <ArrowDropDown style={arrowDownStyles} />{" "}
        </Box>{" "}
        <Box
          sx={{
            ...smallLayoutStyles,
            ...(isSmallScreen && smallLayoutStylesResponsive),
            flexDirection: isSmallScreen ? "column" : "row",
            marginLeft: "6px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "black" }}>Reset All</span>{" "}
        </Box>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={isSmallScreen ? 12 : 6}>
          {/* Content for the left side */}
          <Box sx={layoutStyles2}>
            <Typography
              style={{ color: "black", marginRight: "8px", fontWeight: "500" }}
            >
              Send me Jobs for this Search
            </Typography>
            <Switch style={{ color: "#6973FE" }} />
          </Box>
          <Typography style={{ marginLeft: "46px", marginTop: "10px" }}>
            Showing 30 results for "Graphic Designer"
          </Typography>

          {/* Box 1 */}
          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
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
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
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
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
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
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
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
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
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
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Content for the right side */}
          <Box sx={layoutStyles2} style={{ width: "auto" }}>
            <Typography style={{ color: "black", marginRight: "8px" }}>
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

          {/* Box 1 */}
          <Box
            style={{
              width: "auto",
              height: "69px",
              border: "1px solid #7797FE",
              borderRadius: "54px",
              margin: "30px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              paddingInline: "10px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography>Highlights</Typography>
            <Typography>Job Description</Typography>
            <Typography>More Info</Typography>
            <Typography>Recuiter Information</Typography>
          </Box>

          <Box
            style={{
              width: "auto",
              height: "165px",
              backgroundColor: "#7797FE",
              borderRadius: "17px",
              margin: "30px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingInline: "10px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "18px",
            }}
          >
            Gurgaon / Gurugram, India
            <br /> 0 - 0 Years <br /> 13 days ago <br /> 2 Applied
          </Box>
          <Box
            style={{
              width: "auto",
              height: "61px",
              backgroundColor: "#CCFFCC",
              borderRadius: "17px",
              margin: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingInline: "10px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              gap: "5px",
              fontWeight: "600",
            }}
          >
            <p>
              Get notified for jobs based on your search when they are posted
            </p>
            <p style={{ color: "#7797FE" }}>Send Similar Jobs</p>
            <Switch />
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
            - Able to work in good coordination with production managers and
            engineers.
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
            - Should have hands-on experience with Photoshop and Illustrator.
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "40px",
              marginBottom: "4px",
            }}
          >
            - Should have experience with logo design, corporate brand identity
            design, web UI
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
            - Knowledge about style standards on fonts, colors, and images.
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
              backgroundColor: "#7797FE",
              paddingLeft: "20px",
              paddingTop: "17px",
              margin: "30px",
              color: "white",
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
                backgroundColor: "#CCFFCC",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: "black",
                marginRight: "10px",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#7797FE",
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
                backgroundColor: "#CCFFCC",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: "black",
                marginRight: "10px",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#7797FE",
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
                backgroundColor: "#CCFFCC",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: "black",
                marginRight: "10px",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#7797FE",
                },
              }}
            >
              Report
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/*============ FOOTER ==============*/}
      <Footer/>
    </>
  );
};

export default JobDetails;
