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
import "./EducationDetails.css";
import Axios from "../../../utils/axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{}}>
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
              <div class="list-bulletED2">
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div class="list-item">
                <div class="list-title">Employment</div>
              </div>
            </div>

            <div class="list-item-wrapper">
              <div class="list-bulletED3">
                <CheckIcon sx={{ color: "#CCFFCC" }} />
              </div>
              <div class="list-item">
                <div class="list-title">Education</div>
              </div>
              <div class="white-line"></div>
            </div>

            <div class="list-item-wrapper">
              <div class="list-bullet4">
                <CheckIcon sx={{ color: "#6973FE" }} />
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
              Mention Your Education
            </Typography>
            <p>
              Adding Your Educational Details Will Help Recruiters know Your
              Value As A Potential Candidate.
            </p>

            <h4>Highest Qualification</h4>
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

            <h4>Course</h4>
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

            <h4>Specilization</h4>
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

            <h4>University / Institute</h4>
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

            <h4>Starting Year</h4>
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

            <h4>Passing Year</h4>
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

            <div className="BottomBtn">
              <Button
                type="submit"
                variant="contained"
                sx={{ ...button, ...(isSmallScreen && ButtonResponsive) }}
              >
                Continue <ArrowForwardOutlinedIcon />
              </Button>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
