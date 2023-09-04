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
  Grid,
  TextField,
  Chip,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

/*========== CSS FILE ============ */
import "./Home.css";
import Footer from "../../../partials/Footer";
import Navbar from "../../../partials/Navbar";
/*========== IMAGES ============ */
import img1 from "../../../assets/img/users/Mahindra.jpg";
import img5 from "../../../assets/img/users/Accenture.jpg";
import img4 from "../../../assets/img/users/Capgemini.jpg";
import img2 from "../../../assets/img/users/Cognizant.jpg";
import img6 from "../../../assets/img/users/Hewlett_Packard.jpg";
import img3 from "../../../assets/img/users/Virtual_employe.jpg";

import Axios from "../../../utils/axios";

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  backgroundColor: "transparent",
  borderRadius: "25px",
  padding: "8px 16px",
  border: "1px solid white",
  height: "55px",
  width: "60%",
  marginBottom: "20px",
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
  color: "white", 
};

const buttonStyles = {
  width: "10%",
  height: "45px",
  borderRadius: "30px",
  backgroundColor: "#CCFFCC",
  fontSize: "20px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  textTransform: "capitalize",
  color: "black",
  marginRight: "10px",
  marginLeft: "10px",
  "&:hover": {
    color: "#7797FE",
    backgroundColor: "white",
  },
};

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchHome = async () => {
  //   try {
  //     const response = await Axios.get("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchHome();
  // }, []);

  return (
    <>
      <div className="home-container">
        
        <Navbar/>
        <Box
          sx={{
            textAlign: "left",
            paddingTop: isSmallScreen ? "30%" : "15%",
            paddingBottom: isSmallScreen ? "20%" : "10%",
          }}
        >
          <Typography
            component="div"
            sx={{
              font: "Poppins",
              fontWeight: "400",
              marginLeft: "20px",
              fontSize: isSmallScreen ? "28px" : "40px",
              flexGrow: 1,
              color: "white",
              whiteSpace: "break-spaces",
              maxWidth: isSmallScreen ? "90%" : "30%",
            }}
          >
            "Find Your Dream Job Today."
          </Typography>

          <Typography
            sx={{
              font: "Poppins",
              fontWeight: "400",
              fontSize: isSmallScreen ? "14px" : "18px",
              flexGrow: 1,
              padding: isSmallScreen ? "10px" : "20px",
              color: "white",
              maxWidth: "50%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "lightgreen",
              fontSize: "18px",
              borderRadius: "20px",
              borderColor: "lightgreen",
              margin: "20px",
              width: "180px",
              height: "50px",
            }}
          >
            Register
          </Button>
        </Box>

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

            {/* Submit Button */}
            <Button type="submit" variant="contained" sx={buttonStyles}>
              <Search />
            </Button>
          </Box>
        </Box>
      </div>

      {/*========== CARDS ============ */}
      <Typography>
        <h1 className="top_companies">Top Companies</h1>
      </Typography>

      <div className="cards-container">
        <div className="arrow">
          <ArrowBackIosSharpIcon />
        </div>

        <div className="card">
          <img src={img1} alt="Green Iguana" />
        </div>

        <div className="card">
          <img src={img2} alt="Green Iguana" />
        </div>

        <div className="card">
          <img src={img3} alt="Green Iguana" />
        </div>

        <div className="card">
          <img src={img4} alt="Green Iguana" />
        </div>

        <div className="card">
          <img src={img5} alt="Green Iguana" />
        </div>

        <div className="card">
          <img src={img6} alt="Green Iguana" />
        </div>

        <div className="arrow">
          <ArrowForwardIosIcon />
        </div>
      </div>

      {/*=========== CHIPS ===========*/}
      <Typography>
        <h2 className="top_searches">Top Searches</h2>
      </Typography>
      <div className="container">
        <div className="sub-container">
          <Chip label="Java" variant="outlined" />
          <Chip label="IT" variant="outlined" />
          <Chip label="HR" variant="outlined" />
          <Chip label="Work from Home Jobs" variant="outlined" />
          <Chip label="Freshers" variant="outlined" />
          <Chip label="Banking" variant="outlined" />
          <Chip label="Sales" variant="outlined" />
          <Chip label="Software Engineer" variant="outlined" />
          <Chip label="Accounting" variant="outlined" />
          <Chip label="Business Analyst" variant="outlined" />
          <Chip label="Data Analyst" variant="outlined" />
          <Chip label="DevOps Engineer" variant="outlined" />
          <Chip label="Digital Marketing" variant="outlined" />
        </div>
      </div>

      {/*=========== BLOCKS ===========*/}

      {/*====== block 1 ======*/}
      <div className=" block">
        <div className="sub-block">
          <div className="btn-primary">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
              }}
            >
              Recommended
            </Button>
          </div>

          <Typography className="centered-content">
            <h1>Full Stack Developer</h1>
            <h3 className="centered-content-sub">
              Lorem Ipsum Private Limited
            </h3>
          </Typography>
          <p className="text">4 hours Ago</p>
        </div>

        <div className="bottom">
          <div className="logo">
            <Typography
              className="logo-content"
              style={{ fontSize: "24px", display: "flex", fontWeight: "100" }}
            >
              <BusinessCenterOutlinedIcon
                fontSize="large"
                style={{ marginRight: "8px" }}
              />
              0 To 5 Years Experience
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <PlaceOutlinedIcon fontSize="large" />
              </Box>
              Noida
            </Typography>
          </div>

          <Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
                fontSize: "10px",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              Not Interested
            </Button>
          </Typography>
        </div>
      </div>

      {/*====== block 2 ======*/}
      <div className=" block">
        <div className="sub-block">
          <div className="btn-primary">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
              }}
            >
              Recommended
            </Button>
          </div>

          <Typography className="centered-content">
            <h1>Web Designer</h1>
            <h3 className="centered-content-sub">
              Lorem Ipsum Private Limited
            </h3>
          </Typography>
          <p className="text">9 hours Ago</p>
        </div>

        <div className="bottom">
          <div className="logo">
            <Typography
              className="logo-content"
              style={{ fontSize: "24px", display: "flex", fontWeight: "100" }}
            >
              <BusinessCenterOutlinedIcon
                fontSize="large"
                style={{ marginRight: "8px" }}
              />
              1 To 5 Years Experience
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <PlaceOutlinedIcon fontSize="large" />
              </Box>
              Noida
            </Typography>
          </div>

          <Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
                fontSize: "10px",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              Not Interested
            </Button>
          </Typography>
        </div>
      </div>
      {/*====== block 3 ======*/}
      <div className=" block">
        <div className="sub-block">
          <div className="btn-primary">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
              }}
            >
              Recommended
            </Button>
          </div>

          <Typography className="centered-content">
            <h1>Sr Software Developer</h1>
            <h3 className="centered-content-sub">
              Lorem Ipsum Private Limited
            </h3>
          </Typography>
          <p className="text">1 day Ago</p>
        </div>

        <div className="bottom">
          <div className="logo">
            <Typography
              className="logo-content"
              style={{ fontSize: "24px", display: "flex", fontWeight: "100" }}
            >
              <BusinessCenterOutlinedIcon
                fontSize="large"
                style={{ marginRight: "8px" }}
              />
              0 To 3 Years Experience
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <PlaceOutlinedIcon fontSize="large" />
              </Box>
              Delhi
            </Typography>
          </div>

          <Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
                fontSize: "10px",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                borderColor: "#7797FE",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              Not Interested
            </Button>
          </Typography>
        </div>
      </div>

      {/*============ FOOTER ==============*/}
      <Footer/>
    </>
  );
};

export default Header;
