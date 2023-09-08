import React from "react";

import GridComponent from "./common/table";
import Searchbar from "./common/Searchbar";
import Sidebar from "./common/Sidebar";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import colors from "../../../utils/colors";

const inputStyles = {
  // width: "100%",
  // height: "50px",
  borderRadius: "32.5px",
  // outline: "none",
  // padding: "0 14px",
  // fontSize: "18px",
  // fontWeight: 400,
  // lineHeight: "28px",
};

const headingStyles = {
  fontFamily: "Poppins",
  fontSize: { xs: "32px", md: "48px" },
  fontWeight: 600,
  lineHeight: { xs: "48px", md: "72px" },
  letterSpacing: "0em",
  textAlign: "left",
  color: colors.background,
  marginTop: "30px",
  marginBottom: "10px",
};

const buttonStyles = {
  width: "480px",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "50px",
  // marginLeft: "330px",
  marginBottom: "50px",
  gap: "40px",
};

const EditRecruiter = () => {
  return (
    <div>
     <Sidebar/>
      <Searchbar/>
      <Grid
        container
        spacing={2}
        style={{ height: "100vh" }}
        sx={{
          // marginLeft: { xs: "15px", md: "0px" },
          paddingLeft: { xs: "35px", sm:"80px", md: "200px" },
          width: { xs: "90%", md: "100%" },
        }}
      >
      
        <Grid item md={11} xs={9}  sx={{marginLeft:"4rem"}}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
            sx={{ width: { xs: "100%", md: "75%" } }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={headingStyles}
              style={{ paddingTop: "20px" }}
            >
              Edit Recruiter Profile
            </Typography>
            <Box
             
              style={{
                // width: "117px",
                // height: "117px",
                borderRadius: "50%",
                backgroundColor: colors.background,
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
              sx={{
                width: { xs: "100%", sm: "100%", md: "166px" }, // Adjust width based on screen size
                // maxWidth: "166px", // Set a max width for the box
                mx: "auto", // Horizontally center the box on the page
              }}
            >
              {/* <img src={profile} alt="Profile" /> */}
              {/* <img
                src={pencil}
                alt="Pencil"
                style={{ position: "absolute", bottom: "0", right: "0" }}
              /> */}
            </Box>
          </Box>
          <Grid container rowSpacing={4} columnSpacing={8}>
            <Grid item xs={12} md={5}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
              
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Mobile Number"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Choose Current Location"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Upload Your Photo"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
          </Grid>

          <Typography
            variant="h1"
            component="h1"
            sx={headingStyles}
            style={{ fontSize: "40px" }}
          >
            Professional Details
          </Typography>
          <Grid container rowSpacing={4} columnSpacing={6}>
            <Grid item xs={12} md={5}>
              <TextField
                label="Current Company Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Current Designation "
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="From Year"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="To Year"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Address Line 1"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Address Line 2"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="State/Province/Region"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Zip Code"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Country"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: inputStyles,
                }}
              />
            </Grid>
          </Grid>
          <Box
            sx={(theme) => ({
              ...buttonStyles,
              [theme.breakpoints.down("sm")]: {
                marginInline: "38px",
                flexDirection: "column",
                gap: "25px",
                // width: "240px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                width:"95%",
                marginLeft:"0px"
              },
            })}
          >
            
            <Button
              style={{
                width: "228px",
                height: "58px",
                backgroundColor: colors.background,
                borderRadius: "29px",
              }}
            >
              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "400",
                  backgroundColor: "#7797FE",
                  borderRadius: "29px",
                  color: "#000000",

                }}
              >
                Cancel
              </p>
            </Button>
          
            <Button
              style={{
                width: "228px",
                height: "58px",
                backgroundColor: "#CCFFCC",
                borderRadius: "29px",
              }}
            >
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "400",
                  color: "#000000",
                }}
              >
                Save Changes
              </p>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditRecruiter;
