import React, { useEffect, useState } from "react";
import { Button, Box, Divider } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ArrowDropDown } from "@mui/icons-material";

/*========== CSS FILE ============ */
import "./EmployerProfile.css";

import Footer from "../../../partials/Footer";
import Navbar from "../../../partials/Navbar";

/*========== Images ============ */
import img1 from "../../../assets/img/users/EmplyerProfile.jpg";
import img2 from "../../../assets/img/users/EmployerProfileRectangle.jpg";
import user from "../../../assets/img/users/User.jpg";

import Axios from "../../../utils/axios";

const dividerStyles = {
  backgroundColor: "#6973FE",
  width: "1px",
  height: "32px",
  marginInline: "8px",
};

const buttonStyles = {
  width: "auto",
  height: "auto",
  fontSize: "15px",
  fontWeight: "400",
  border: "1px solid #6973FE",
  backgroundColor: "transparent",
  color: "black",
  marginBottom: "50px",
};

const buttonGroupStyles = {
  backgroundColor: "white",
  color: "black",
  borderColor: "#6973FE",
  width: "150px",
};

const buttonGroupStyles2 = {
  backgroundColor: "white",
  color: "black",
  borderColor: "#6973FE",
  borderRadius:"20px",
  width: "160px",
  height:"50px",
};

const boxstyles = {
  width: "auto",
  height: "240px",
  borderRadius: "50px",
  backgroundColor: "#6973FE",
  marginInline: "20px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const EmployerProfile = () => {

   // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchEmployerProfile = async () => {
  //   try {
  //     const response = await Axios.get("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEmployerProfile();
  // }, []);

  return (
    <>
      <div className="home-container">
        <Navbar />
      </div>

      <Box className="img1">
        <img src={img1} alt="No Preview" />
      </Box>

      <Box className="div1Styles">
        <div className="div2Styles">
          <img src={user} alt="" className="userImg" />
          <Box className="div3heading">
            <span>Lorem Ipsum</span>
          </Box>
          <Box className="editButton">
            <Button style={buttonStyles} type="submit" variant="contained">
              Edit Profile
            </Button>
          </Box>
        </div>
        <Box className="div3styles">
          <span>Job Posts</span>
          <span>Job Likes</span>
          <span>Job Shared</span>
        </Box>
      </Box>

      <div class="container">
        <Box class="div4styles">
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            disableElevation
          >
            <Button sx={buttonGroupStyles}>
              Pending <ArrowDropDown />
            </Button>
            <Button sx={buttonGroupStyles}>Save Changes</Button>
          </ButtonGroup>
        </Box>
      </div>

      <Box className="div5styles">
        <ButtonGroup
            size="large" aria-label="large button group"
          >
            <Button sx={buttonGroupStyles2}>
              Job Posted 
            </Button>
            <Button sx={buttonGroupStyles2}>Address</Button>
            <Button sx={buttonGroupStyles2}>About</Button>
          </ButtonGroup>
      </Box>

      <Box
        sx={(theme) => ({
          ...boxstyles,
        })}
      >
        <Box component="h1" sx={{ fontWeight: "400", color: "white" }}>
          You have 0 job post
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default EmployerProfile;
