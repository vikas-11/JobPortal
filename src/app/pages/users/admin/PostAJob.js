import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container, TextField, Button, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import "../admin/PostAJob.css";
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
      <header>
        <h1>Post A Job!</h1>
      </header>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Container>
            <h3>Job Information</h3>

            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Location"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Job Type"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Salary/Annum"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Number of Posts"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Industry"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h3>Qualifications & Experience</h3>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Location"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h3>Job Description</h3>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 0, width: "100%" },
                "& fieldset": {
                  borderColor: "#6973FE",
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
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
