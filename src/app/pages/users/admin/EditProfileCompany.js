import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container, TextField, Button, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";

import "../admin/EditProfileCompany.css";
import img from "../../../assets/img/users/User.png";
import Navbar from "../../../partials/Navbar.js";
import Axios from "../../../utils/axios";

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
  border: "1px solid #6973FE",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const outlinedButtonResponsive = {
  fontSize: "10px",
};

const button = {
  fontWeight: "600",
  width: "auto",
  fontSize: "16px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: "#6973FE",
  color: "white",
  "&:hover": {
    color: "#7797FE",
    backgroundColor: "white",
  },
};

const boxStyles = {
  border: "1px solid #6973FE",
  borderRadius: "20px",
  backgroundColor: "#6973FE",
  color: "white",
  padding: "20px",
  textAlign: "center",
};

export default function PostAJob() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  //    const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchPostAJob = async () => {
  //   try {
  //     const response = await Axios.post("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPostAJob();
  // }, []);


  return (
    <>
      <div className="home-container">
        <Navbar />
      </div>
      <Container>
        <Grid container spacing={2}>

          <Grid item xs={12} md={4}>
            <Box sx={{ ...boxStyles, height: '160px' }}>
              <img src={img} alt="" />
              <h3>Lorem Ipsum</h3>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12}>
                <TextField
                  label="Company Information"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  label="Company's Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={12}>
                <TextField
                  label="Company Domain"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Contact Information"
              variant="outlined"
              fullWidth
              InputProps={{
                style: textFeild,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="+91"
              variant="outlined"
              fullWidth
              InputProps={{
                style: textFeild,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              InputProps={{
                style: textFeild,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Zip Code"
              variant="outlined"
              fullWidth
              InputProps={{
                style: textFeild,
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              InputProps={{
                style: textFeild,
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Opportunity ERI.com"
              variant="outlined"
              fullWidth
              InputProps={{
                style: textFeild,
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <div className="BottomBtn">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ...button,
                  ...(isSmallScreen && outlinedButtonResponsive),
                }}
              >
                Edit Profile
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
