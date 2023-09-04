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

const outlinedButton = {
  width: "auto",
  fontSize: "14px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  color: "black",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
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
  backgroundColor: "#CCFFCC",
  color: "black",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
};

const chipResponsive = {
  flexDirection: "column",
  gap: "5px",
};

export default function EducationDetails1() {
  const handleClick = () => {};
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchEducationDetails1 = async () => {
  //   try {
  //     const response = await Axios.post("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEducationDetails1();
  // }, []);


  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
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
              <div class="list-bullet2">
                <CheckIcon sx={{ color: "#CCFFCC" }} />
              </div>
              <div class="list-item">
                <div class="list-title">Employment</div>
              </div>
            </div>

            <div class="list-item-wrapper">
              <div class="list-bullet3">
                <CheckIcon sx={{ color: "#6973FE" }} />
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
              Add Your Employment
            </Typography>
            <p>Employment details help recruiters understand your background</p>

            <h4>Are You currently employed?</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
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
                    Yes
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    No
                  </Button>
                </div>
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

            <h4>Total work experience</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Select Year"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Select Month"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Company</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg. Flipakart"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Job Title</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg. Software"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Current City</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Eg. Flipakart"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Checkbox {...label} defaultChecked />
                Outside India
              </Grid>
            </Grid>

            <h4>Suggestions:</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12}>
                <div
                  className="chips"
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Noida
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Banglore/Bangluru
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Hyderabad/Secunderabad
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div
                  className="chips"
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Pune
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Mumbai
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Chennai
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    New Delhi
                  </Button>
                </div>
              </Grid>
            </Grid>

            <h4>Working Since</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={5}>
                <TextField
                  label="MM/YYYY"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="To"
                  variant="outlined"
                  width="10px"
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  label="Present"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Annual Salary</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="xxxx Per Year"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            <h4>Notice Period</h4>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12}>
                <div
                  className="chips"
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    15 Days or Less
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    1 Month
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    2 Months
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    3 Months
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    More than 3 Months
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
                  ...(isSmallScreen && outlinedButtonResponsive),
                }}
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
