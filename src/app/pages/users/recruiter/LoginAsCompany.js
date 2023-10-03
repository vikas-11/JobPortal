import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import Colors from "../../../utils/colors";
import Checkbox from "@mui/material/Checkbox";
// import Axios from "../../../utils/Axios";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const heading = {
  fontWeight: "600",
  textAlign: "left",
  color: Colors.palette.background.default,
  marginTop: "30px",
  marginBottom: "10px",
  lineHeight: "70px",
};

const headingResponsive = {
  fontSize: "1.4rem",
};

const button = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: Colors.palette.primary.backgroundjob,
  color: Colors.palette.primary.main,
  "&:hover": {
    color: Colors.palette.primary.main,
    backgroundColor: Colors.palette.primary.color,
  },
};

const LoginAsCompany = () => {

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchLoginAsCompany = async () => {
  //   try {
  //     const response = await Axios.get("/login");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchLoginAsCompany();
  // }, []);

  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
      >
        Recruiter/Company Profile
      </Typography>

      <Grid container rowSpacing={4} columnSpacing={8}>
        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Choose Current Location"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Upload Your Photo"
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
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Current Designation"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="From Year"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="To Year"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address Line 1"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address Line 2"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="State/Province/Region"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Zip Code"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Country"
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
        + Add Previous Company
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={12}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Total Experience In Hiring"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Level I Hire For"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Industry"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Functions"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Skills I Hire For"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Referral Code"
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
        Achievement
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={8}>
        <Grid item xs={12} md={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Year"
            variant="outlined"
            fullWidth
           InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
      </Grid>

      <Box sx={{margin:"20px"}}>
        <p>
          <Checkbox
            {...label}
            defaultChecked
            sx={{ backgroundColor: Colors.palette.primary.backgroundjob, color: Colors.palette.primary.main }}
          />{" "}
          I agree to use the aforesaid details to create my Recruiter Profile &
          display it on the <b>SmartJob</b> site and also agree to be bound by
          the <span>Terms of Use </span> & <span>Privacy of SmartJob</span>
        </p>
      </Box>

      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button type="submit" variant="contained" sx={button}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default LoginAsCompany;
