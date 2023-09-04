import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { Container, TextField, Button, useMediaQuery } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import Axios from "../../../utils/axios";

import "./EducationDetails.css";

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

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
  border: "1px solid #6973FE",
  padding: "0 14px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const outlinedButton = {
  fontSize: "14px",
  borderRadius: "30px",
  textTransform: "capitalize",
  color: "black",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
};

const button = {
  fontWeight: "600",
  width: "auto",
  fontSize: "16px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: "#CCFFCC",
  color: "black",
  "&:hover": {
    color: "#7797FE",
    backgroundColor: "white",
  },
};

const outlinedButtonResponsive = {
  fontSize: "10px",
};

const chipResponsive = {
  flexDirection: "column",
  gap: "5px",
};

export default function RegisterLastPage() {
  const handleClick = () => {};
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fecthRegisterLastPage = async () => {
  //   try {
  //     const response = await Axios.post("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fecthRegisterLastPage();
  // }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* Vertical Line */}
          <div class="list-wrapper">
            <div class="line"></div>

            <div class="list-item-wrapper">
              <div class="list-bullet1">
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div class="list-item">
                <div class="list-title">Basic Details</div>
              </div>
            </div>

            <div class="list-item-wrapper">
              <div class="list-bulletRLP2">
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div class="list-item">
                <div class="list-title">Employment</div>
              </div>
            </div>

            <div class="list-item-wrapper">
              <div class="list-bulletRLP3">
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div class="list-item">
                <div class="list-title">Education</div>
              </div>
              <div class="white-line"></div>
            </div>

            <div class="list-item-wrapper">
              <div class="list-bulletRLP4">
                <CheckIcon sx={{ color: "#CCFFCC" }} />
              </div>
              <div class="list-item">
                <div class="list-title">Last Step</div>
              </div>
              <div class="white-line"></div>
            </div>
          </div>
        </Grid>

        <Grid item xs={8}>
          <Container>
            <Typography
              variant="h4"
              sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
            >
              Add Headline & Preferences
            </Typography>
            <p>
              Add Preferences To Get Relevant Job Recommendations & Make Your
              Profile Stronger.
            </p>

            <h4>Highest Qualification</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Add Resume Headline And Get Relevant Job Recommendations"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Suggestions:</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Graphic Designer & Team Lead With B.A 
                  In Arts&Humanities Currently Living In Noida"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Prefered Working Locations</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg: Noida,Delhi,Varanasi"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Suggestions:</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12}>
                <div
                  className="btn"
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Chennai +
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Hyderabad +
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Noida +
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Varanasi+
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div
                  className="btn"
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Delhi +
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Kolkata +
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Ahemdabad +
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Pune +
                  </Button>
                </div>
              </Grid>
            </Grid>

            <h4>Preferred Salary</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg: 3,50,000"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Gender</h4>
            <Grid container rowSpacing={4} columnSpacing={12}>
              <Grid item xs={12} md={6}>
                <div className="btn">
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    Male
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    Female
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    Other
                  </Button>
                </div>
              </Grid>
            </Grid>

            <div className="BottomBtn">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ...button,
                }}
              >
                Submit
              </Button>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
