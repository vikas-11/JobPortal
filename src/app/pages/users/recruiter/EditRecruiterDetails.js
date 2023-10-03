import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import {
  Container,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import user from "../../../assets/img/users/User.jpg";
import Colors from "../../../utils/colors";
// import Axios from "../../../utils/Axios";

const heading = {
  fontWeight: "600",
  textAlign: "left",
  color: Colors.palette.background.default,
  marginTop: "30px",
  marginBottom: "10px",
  lineHeight: "70px",
};

const headingResponsive = {
  fontSize: "1.2rem",
};

const boxStyles = {
  marginTop: "8%",
  justifyContent: "center",
  alignItem: "center",
};

const button1 = {
  width: "auto",
  fontSize: "16px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor:Colors.palette.background.card,
  color: "white",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
};

const button1Responsive = {
  fontSize: "10px",
};

const button2 = {
  width: "auto",
  fontSize: "16px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: Colors.palette.primary.backgroundjob,
  color: "black",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
};

const button2Responsive = {
  width: "5%",
  fontSize: "10px",
  borderRadius: "15px",
};

const imgStyles = {
  marginTop:"2%",
  maxWidth: "100%",
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
    <Container>
    <Box sx={{ display: "flex" }}>
      {/* <Sidebar/> */}

      <Box component="main" sx={{ ...boxStyles }}>
        
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h4"
              sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
            >
              Edit Recruiter Profile
            </Typography>
            <Typography
              sx={{ ...imgStyles }}
            >
             <div
                style={{
                  marginRight: "20px",
                  maxWidth: isSmallScreen ? "20px" : "100%",
                  height: isSmallScreen ? "20px" : "auto",
                }}
              >
                <img
                  src={user}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Typography>
          </Box>

          <Grid
            container
            rowSpacing={4}
            columnSpacing={8}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                id="fname"
                name="fname"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                id="lname"
                name="lname"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email Address"
                id="email"
                name="email"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Mobile Number"
                id="mobile"
                name="mobile"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Choose Current Location"
                id="location"
                name="location"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Upload Your Photo"
                id="photo"
                name="photo"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
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
                id="companyname"
                name="company name"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Current Designation"
                id="desigantion"
                name="desigantion"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="From Year"
                id="fromyear"
                name="from year"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="To Year"
                id="toyear"
                name="to year"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 1"
                id="address1"
                name="address line 1"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 2"
                id="address2"
                name="address line 2"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                id="city"
                name="city"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="State/Province/Region"
                id="state"
                name="state"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Zip Code"
                id="zip"
                name="zip code"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Country"
                id="country"
                name="country"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { borderRadius: "33px" } }}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "10px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ ...button1, ...(isSmallScreen && button1Responsive) }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ ...button2, ...(isSmallScreen && button2Responsive) }}
            >
              Save Changes
            </Button>
          </Box>
        
      </Box>
    </Box>
    </Container>
  );
}