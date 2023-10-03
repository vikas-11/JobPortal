import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  Container,
  TextField,
  Button,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Colors from "../../../utils/colors";
// import Axios from "../../../utils/Axios";

const outlinedButtonResponsive = {
  fontSize: "10px",
};

const button = {
  fontWeight: "600",
  width: "auto",
  fontSize: "16px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: Colors.palette.background.default,
  color: Colors.palette.primary.color,
  "&:hover": {
    color: Colors.palette.background.card,
    backgroundColor: Colors.palette.primary.color,
  },
};

const headerStyles = {
  backgroundColor: Colors.palette.background.default,
  color: Colors.palette.primary.color,
  fontSize: "18px",
  textAlign: "center",
  padding: "10px",
  marginBottom: "10px",
};

export default function PostAJob() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  //  const [loading, setLoading] = useState(false);
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
      <Box sx={headerStyles}>
        <header>
          <h1>Post A Job!</h1>
        </header>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Container>
            <Typography variant="h5" sx={{margin:"1%", color: Colors.palette.background.default, fontWeight: "600", }}>
              Job Information
            </Typography>

            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Job Title"
                  id="job"
                  name="jobtitle"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Location"
                  id="location"
                  name="location"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Job Type"
                  id="jobtype"
                  name="jobtype"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Salary/Annum"
                  id="salary"
                  name="salary"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Number of Posts"
                  id="numberofpost"
                  name="numberofpost"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Industry"
                  id="industry"
                  name="industry"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
            </Grid>

            <Typography variant="h5" sx={{margin:"1%", color: Colors.palette.background.default, fontWeight: "600", }}>
            Qualifications & Experience
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Job Title"
                  id="jobtitle"
                  name="jobtitle"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Location"
                  id="location"
                  name="location"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                />
              </Grid>
            </Grid>

            <Typography variant="h5" sx={{margin:"1%", color: Colors.palette.background.default, fontWeight: "600", }}>
            Job Description
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 0, width: "100%" },
                "& fieldset": {
                  borderColor: Colors.palette.background.default,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={8}
                  defaultValue="Description"
                />
              </div>
            </Box>

            <Box sx={{display:"flex",justifyContent:"center",margin:"10px"}}>
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
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}