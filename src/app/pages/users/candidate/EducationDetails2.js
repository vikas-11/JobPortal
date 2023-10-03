import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { Container, TextField, Button, useMediaQuery } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CheckIcon from "@mui/icons-material/Check";
import Axios from "../../../utils/Axios";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import classes from "./EducationDetails.module.css";
import Colors from "../../../utils/colors";
import { Link } from "react-router-dom";

const steps = ["Basic Details", "Employment", "Education", "Last Step "];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  customLink: {
    textDecoration: "none",
    fontWeight: "bold",
  },
};

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
  // border: "1px solid #6973FE",
  padding: "0 14px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
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

const ButtonResponsive = {
  fontSize: "10px",
};

export default function EducationDetails2() {
  const handleClick = () => {};
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchEducationDetails2 = async () => {
  //   try {
  //     const response = await Axios.post("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEducationDetails2();
  // }, []);

  return (
    <>
      {/*  */}

      <Box
        sx={{
          width: "100%",
          color: "white",
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            xl: "none",
            lg: "none",
          },
        }}
      >
        <Stepper activeStep={1} alternativeLabel>
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
                className={classes["list-bulletED2"]}
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
                className={classes["list-bulletED3"]}
                style={{
                  background: Colors.palette.color.textColor,
                  color: Colors.palette.background.text,
                }}
              >
                <CheckIcon sx={{ color: Colors.palette.color.textColor }} />
              </div>
              <div className={classes["list-item"]}>
                <div className={classes["list-title"]}>Education</div>
              </div>
              <div className={classes["white-line"]}></div>
            </div>

            <div className={classes["list-item-wrapper"]}>
              <div
                className={classes["list-bullet4"]}
                style={{
                  background: Colors.palette.background.default,
                  color: Colors.palette.background.text,
                }}
              >
                <CheckIcon sx={{ color: Colors.palette.background.default }} />
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
              variant="Typography"
              sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
            >
              Mention Your Education
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "20px" }}>
              Adding Your Educational Details Will Help Recruiters know Your
              Value As A Potential Candidate.
            </Typography>

            {/* <Typography>Highest Qualification</Typography> */}
            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Highest Qualification
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg; 10th,12th graduate,diploma"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            {/* <Typography>Course</Typography> */}
            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Course
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg; B.A,Bsc,Bcom"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Specilization
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Art,Commerce,Science"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              University / Institute
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg; Mahatma Gandhi Kashi Vidhyapeeth (MGKVP)"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Starting Year
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg; 2021"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
              Passing Year
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg; 2023"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <div className={classes["BottomBtn"]}>
              <Link to="/registerlastpage" style={style.customLink}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ...button,
                    ...(isSmallScreen && ButtonResponsive),
                    textAlign: "center",
                    ml: "-25%",
                  }}
                >
                  Continue <ArrowForwardOutlinedIcon />
                </Button>
              </Link>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
