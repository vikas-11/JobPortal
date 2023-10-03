import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { Container, TextField, Button, useMediaQuery } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
// import Axios from "../../../utils/Axios";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

import classes from "./EducationDetails.module.css";
import Colors from "../../../utils/colors";

const steps = ["Basic Details", "Employment", "Education", "Last Step "];

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

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
  //  border: "1px solid #6973FE",
  padding: "0 14px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const outlinedButton = {
  fontSize: "14px",
  borderRadius: "30px",
  textTransform: "capitalize",
  color: Colors.palette.primary.main,
  "&:hover": {
    color: Colors.palette.background.text,
    backgroundColor: Colors.palette.background.card,
  },
};

const button = {
  fontWeight: "600",
  width: "auto",
  fontSize: "16px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: Colors.palette.color.textColor,
  color: Colors.palette.primary.main,
  "&:hover": {
    color: Colors.palette.background.card,
    backgroundColor: Colors.palette.background.text,
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
      {/*  */}

      <Box
        sx={{
          width: "100%",
          color: Colors.palette.background.text,
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            xl: "none",
            lg: "none",
          },
        }}
      >
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/*  */}

      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "block",
              xl: "block",
              lg: "block",
            },
          }}
        >
          {/* Vertical Line */}
          <div className={classes["list-wrapper"]}>
            <div className={classes["line"]}></div>

            <div className={classes["list-item-wrapper"]}>
              <div
                className={classes["list-bullet1"]}
                style={{
                  background: Colors.palette.background.card,
                  color: Colors.palette.background.text,
                }}
              >
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div className={classes["list-item"]}>
                <div className={classes["list-title"]}>Basic Details</div>
              </div>
            </div>

            <div className={classes["list-item-wrapper"]}>
              <div
                className={classes["list-bulletRLP2"]}
                style={{
                  background: Colors.palette.background.default,
                  color: Colors.palette.background.text,
                }}
              >
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div className={classes["list-item"]}>
                <div className={classes["list-title"]}>Employment</div>
              </div>
            </div>

            <div className={classes["list-item-wrapper"]}>
              <div
                className={classes["list-bulletRLP3"]}
                style={{
                  background: Colors.palette.background.default,
                  color: Colors.palette.background.text,
                }}
              >
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div className={classes["list-item"]}>
                <div className={classes["list-title"]}>Education</div>
              </div>
              <div className={classes["white-line"]}></div>
            </div>

            <div className={classes["list-item-wrapper"]}>
              <div
                className={classes["list-bulletRLP4"]}
                style={{
                  background: Colors.palette.color.textColor,
                  color: Colors.palette.background.text,
                }}
              >
                <CheckIcon sx={{ color: Colors.palette.color.textColor }} />
              </div>
              <div className={classes["list-item"]}>
                <div className={classes["list-title"]}>Last Step</div>
              </div>
              <div className={classes["white-line"]}></div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Container>
            <Typography
              variant="h4"
              sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
            >
              Add Headline & Preferences
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "20px" }}>
              Add Preferences To Get Relevant Job Recommendations & Make Your
              Profile Stronger.
            </Typography>

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Highest Qualification
            </Typography>
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

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Suggestions:
            </Typography>
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

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Prefered Working Locations
            </Typography>
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

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Suggestions:
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12}>
                <div
                  className={classes["btn"]}
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
                  className={classes["btn"]}
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

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Preferred Salary
            </Typography>
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

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Gender
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={12}>
              <Grid item xs={12} md={6}>
                <div className={classes["btn"]}>
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

            <div className={classes["BottomBtn"]}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ...button,
                  marginLeft: "-10%",
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
