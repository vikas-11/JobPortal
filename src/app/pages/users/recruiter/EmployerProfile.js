import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ArrowDropDown } from "@mui/icons-material";
import Footer from "../../../partials/Footer";
import img1 from "../../../assets/img/users/EmplyerProfile.jpg";
import user from "../../../assets/img/users/User.jpg";
import Colors from "../../../utils/colors";


const div1Styles = {
  maxWidth: "100%",
  height: "auto",
  display: "block",
  margin: "0 auto",
  background: "linear-gradient(to right, #CCFFCC, #6973fe)",
  "@media (max-width: 768px)": {
    background: "linear-gradient(to bottom, #CCFFCC, #6973fe)",
  },
};

const div2Styles = {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

const userImg = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "50%",
  border: "15px solid white",
  margin: "20px",
};

const div3heading = {
  marginLeft: "20px",
};

const editButton = {
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translateY(-50%)",
  paddingLeft: "20%",
};

const div3styles = {
  display: "flex",
  justifyContent: "center",
  gap: "190px",
  marginTop: "20px",
};

const div4styles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "30px",
};

const div5styles = {
  display: "flex",
  marginBottom: "40px",
  marginLeft: "20px",
  padding: "20px",
};

const buttonStyles = {
  width: "auto",
  height: "auto",
  fontSize: "15px",
  fontWeight: "400",
  border: "1px solid #6973FE",
  backgroundColor: "transparent",
  color: Colors.palette.primary.main,
  marginBottom: "50px",
};

const buttonGroupStyles = {
  backgroundColor: Colors.palette.primary.color,
  color: Colors.palette.primary.main,
  borderColor: Colors.palette.background.default,
  width: "130px",
  textTransform:"capitalize",
  fontSize:"14px"
};

const buttonGroupStyles2 = {
  backgroundColor: Colors.palette.primary.color,
  color: Colors.palette.primary.main,
  borderColor: Colors.palette.background.default,
  borderRadius: "20px",
  width: "150px",
  height: "50px",
  textTransform:"capitalize",
  fontSize:"14px"
};

const boxstyles = {
  width: "auto",
  height: "240px",
  borderRadius: "50px",
  backgroundColor: Colors.palette.background.default,
  marginInline: "20px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign:"center",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const responsiveStyles = {
  div2Styles: {
    flexDirection: "column",
    alignItems: "center",
  },
  userImg: {
    margin: "20px",
    height: "60px",
    width: "60px",
    border: "10px solid white",
  },
  img1: {
    display: "none",
  },
  editButton: {
    position: "static",
    transform: "none",
    paddingLeft: "0",
    margin: "20px",
  },
  div3styles: {
    flexDirection: "column",
    gap: "10px",
    margin: "20px",
  },
  div4styles: {
    flexDirection: "row",
    marginLeft: "50px",
  },
  div5styles: {
    flexDirection: "column",
    gap: "5px",
    padding: "5px",
    width: "auto",
    margin: "10px",
  },
  boxstyles: {
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
  },
};

const EmployerProfile = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box>
        <Typography>
          <img
            src={img1}
            alt="No Preview"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Typography>

        <Box sx={div1Styles}>
          <Box
            sx={{
              ...div2Styles,
              ...(screenWidth <= 768 && responsiveStyles.div2Styles),
            }}
          >
            <img
              src={user}
              alt=""
              style={{
                ...userImg,
                ...(screenWidth <= 768 && responsiveStyles.userImg),
              }}
            />
            <Box sx={div3heading}>
              <Typography variant="h5">Lorem Ipsum</Typography>
            </Box>
            <Box
              sx={{
                ...editButton,
                ...(screenWidth <= 768 && responsiveStyles.editButton),
              }}
            >
              <Button style={buttonStyles} type="submit" variant="contained">
                Edit Profile
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              ...div3styles,
              ...(screenWidth <= 768 && responsiveStyles.div3styles),
            }}
          >
            <Typography variant="h6">Job Posts</Typography>
            <Typography variant="h6">Job Likes</Typography>
            <Typography variant="h6"> Job Shared</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ...div4styles,
            ...(screenWidth <= 768 && responsiveStyles.div4styles),
          }}
        >
          <ButtonGroup size="small" aria-label="outlined button group">
            <Button style={{ ...buttonGroupStyles }}>
              Pending <ArrowDropDown />
            </Button>
            <Button style={{ ...buttonGroupStyles,    marginRight:"10px"}}>
              Save Changes
            </Button>
          </ButtonGroup>
        </Box>
        

        <Box
          sx={{
            ...div5styles,
            ...(screenWidth <= 768 && responsiveStyles.div5styles),
          }}
        >
          <ButtonGroup size="medium" aria-label="outlined button group">
            <Button sx={buttonGroupStyles2}>Job Posted</Button>
            <Button sx={buttonGroupStyles2}>Address</Button>
            <Button sx={buttonGroupStyles2}>About</Button>
          </ButtonGroup>
        </Box>

        <Box
          sx={{
            ...boxstyles,
            ...(screenWidth <= 768 && responsiveStyles.boxstyles),
          }}
        >
          <Box sx={{ fontSize: "28px", fontWeight: "400", color: "white" }}>
            You have 0 job post
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default EmployerProfile;