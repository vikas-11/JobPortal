import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Divider,
  Grid,
  TextField,
  Paper,
  Container,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import Footer from "../../../partials/Footer";
// import Axios from "../../../utils/Axios";
import Colors from "../../../utils/colors";
import { buildAggregatedQuickFilterApplier } from "@mui/x-data-grid/hooks/features/filter/gridFilterUtils";

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
  color: Colors.palette.background.default,
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
  backgroundColor: Colors.palette.color.textColor,
  // backgroundColor:Colors.main.color.textColor,
  fontSize: "20px",
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

const linkStyles = {
  textDecoration: "none",
  fontSize: "18px",
  color: Colors.palette.background.default,
};

const labelStyles = {
  // color: Colors.palette.background.text,
  color: Colors.grey,
};

const dividerStyles = {
  backgroundColor: Colors.palette.background.default,
  height: "100%",
};

const buttonStyles1 = {
  width: "70%",
  padding: "20px",
  height: "20px",
  borderRadius: "30px",
  backgroundColor: Colors.palette.background.card,
  // backgroundColor:'Colors.light',
  // backgroundjob:'red',
  fontSize: "20px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  textTransform: "capitalize",
  color: "white",
  marginRight: "10px",
  marginLeft: "50px",
  // marginTop:'10px',

  "&:hover": {
    color: Colors.palette.background.card,
    backgroundColor: Colors.palette.background.text,
  },
};

const CompanyNames = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  // const screenlayout = useMediaQuery("max-width:600)");

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

        {/* Submit Button */}
        {/* <Button type="submit" variant="contained" sx={buttonStyles}>
          Search
        </Button> */}
        <div
          style={{
            marginRight: isSmallScreen ? "30%" : "0px",
            marginTop: isSmallScreen ? "10px" : "0px",
          }}
        >
          <Button type="submit" variant="contained" sx={buttonStyles1}>
            <Search />
            Search
          </Button>
        </div>
      </Box>

      {/* Navigation Bar */}
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "block",
            xl: "block",
            lg: "block",
          },
        }}
      >
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
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
            md: "none",
            xl: "none",
            lg: "none",
          },
          ml: "18%",
        }}
      >
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={4} sm={4} md={4} xl={4}>
              {/* <Paper elevation={3} sx={{ ...sectionStyles, backgroundColor: 'blue' }}> */}
              <a href="/" style={linkStyles}>
                Companies
              </a>
              <br /> <br />
              <a href="/" style={linkStyles}>
                Skill
              </a>{" "}
              <br /> <br />
              {/* </Paper> */}
            </Grid>
            <Grid item xs={4} sm={4} md={4} xl={4}>
              <a href="/" style={linkStyles}>
                Designation
              </a>{" "}
              <br /> <br />
              <a href="/" style={linkStyles}>
                <p>Other Jobs</p>
              </a>
            </Grid>
            <Grid item xs={4} sm={4} md={4} xl={4}>
              <a href="/" style={linkStyles}>
                Category
              </a>{" "}
              <br /> <br />
              <a href="/" style={linkStyles}>
                Cities
              </a>
              <br />
              <br />
            </Grid>
          </Grid>
        </Container>
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
          <Grid item xs={12} sm={12} md={12} xl={6}>
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
          <Grid item xs={12} sm={12} md={12} xl={6}>
            <Paper
              elevation={3}
              sx={{
                ...layoutStyles,
                backgroundColor: Colors.palette.background.card,
                color: Colors.palette.background.text,
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
          <Grid item xs={12} sm={12} md={12} xl={6}>
            <Paper
              elevation={3}
              sx={{
                ...layoutStyles,
                backgroundColor: Colors.palette.background.text,
                color: Colors.palette.primary.main,
              }}
            >
              <div style={contentStyles}>
                <h1 style={titleStyles}>Jobs by Top Designation</h1>
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
          <Grid item xs={12} sm={12} md={12} xl={6}>
            <Paper
              elevation={3}
              sx={{
                ...layoutStyles,
                backgroundColor: Colors.palette.background.default,
                color: Colors.palette.primary.color,
              }}
            >
              <div style={contentStyles}>
                <h1>Jobs by top Category</h1>
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
          <Grid item xs={12} sm={12} md={12} xl={6}>
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
          <Grid item xs={12} sm={12} md={12} xl={6}>
            <Paper
              elevation={3}
              sx={{
                ...layoutStyles,
                backgroundColor: Colors.palette.background.card,
                color: Colors.palette.background.text,
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
