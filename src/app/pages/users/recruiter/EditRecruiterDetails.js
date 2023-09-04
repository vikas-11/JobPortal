import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import {
  Container,
  TextField,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";

import "./EditRecruiterDetails.css";
import Sidebar from "../../../partials/Sidebar";
import user from "../../../assets/img/users/User.jpg";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Axios from "../../../utils/axios";

const heading = {
  fontWeight: "600",
  textAlign: "left",
  color: "#6973FE",
  marginTop: "30px",
  marginBottom: "10px",
  lineHeight: "70px",
};

const headingResponsive = {
  fontSize: "1.4rem",
};

const dividerResponsive = {
  display: "none",
};

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
  border: "1px solid #6973FE",
  padding: "0 14px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const button1 = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: "#7797FE",
  color: "white",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
};

const button2 = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: "#CCFFCC",
  color: "black",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
};

export default function EditRecruiterDetails() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchEditRecruiterDetails = async () => {
  //   try {
  //     const response = await Axios.get("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEditRecruiterDetails();
  // }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Grid>
        <Divider
          orientation="vertical"
          sx={{
            width: "0.5px",
            margin: "0 50px",
            backgroundColor: "black",
            ...(isSmallScreen && dividerResponsive),
          }}
        ></Divider>
      </Grid>
      <Box component="main">
        <Container>
          <div className="profile-container">
            <Typography
              variant="h4"
              sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
            >
              Edit Recruiter Profile
            </Typography>
            <img src={user} alt="" className="profile-image" />
          </div>

          <Grid container rowSpacing={4} columnSpacing={8}>
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Mobile Number"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Choose Current Location"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Upload Your Photo"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
          </Grid>
          <Typography
            variant="h4"
            sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
          >
            Professional Details
          </Typography>

          <Grid container rowSpacing={4} columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Current Company Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Current Designation"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="From Year"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="To Year"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 1"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 2"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="State/Province/Region"
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
            <Grid item xs={12} md={6}>
              <TextField
                label="Country"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
          </Grid>

          <div className="btn">
            <Button type="submit" variant="contained" sx={button1}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={button2}>
              Save Changes
            </Button>
          </div>
        </Container>
      </Box>
    </Box>
  );
}
