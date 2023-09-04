import React,{ useEffect, useState } from "react";
import "./Register.css";
import {
  TextField,
  InputAdornment,
  Button,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Group4 from "../../../../assets/img/Group4.png";
import Vector1 from "../../../../assets/img/Vector1.png";
import Vector2 from "../../../../assets/img/Vector2.png";
import Google from "../../../../assets/img/Google.png";
import Facebook from "../../../../assets/img/Facebook.png";
import Linkedin from "../../../../assets/img/Linkedin.png";
import UploadIcon from "@mui/icons-material/Upload";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import colors from "../../../../utils/colors";
import Axios from "../../../../utils/axios";

const Register = () => {
  const [checked, setChecked] = React.useState(false);
  
  // const [response, setResponse] = useState(null);
  // const [error, setError] = useState(null);

  
  // const userResigter = async()=>{
  //   try{
  //     const response = await Axios.post('/createussers');
  //     setResponse(response.data.data);
  //   } catch(error){
  //     console.log(error);
  //   } 
  // }

  // useEffect(()=>{
  //   userResigter();
  // })

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async  (values) => {
      console.log(values);
      // try {
      //   const headers = {
      //     // Add your authentication headers here
      //     Authorization: "Bearer YOUR_ACCESS_TOKEN", // Example access token
      //     // Other headers if needed
      //   };

      //   const response = await Axios.post("/createussers", values , { headers });
      //   console.log("Response from API:", response.data);
      // } catch (error) {
      //   console.error("Error submitting form:", error);
      // }
    },
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="top">
      <div className="top1">
        <img
          src={Vector1}
          alt="No preview"
          style={{
            width: "100%",
            height: "218.06px",
            top: "-2px",
            left: "-3px",
          }}
        />
      </div>

      {/* It is the middle Part */}
      <div className="middle">
        {/* It is the middle Left Part */}
        <div className="midleft">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img
                  src={Group4}
                  alt= "no preview"
                  style={{
                    width: "100%",
                    height: "188.64px",
                    maxWidth: "204px",
                    maxHeight: "188.64076232910156px",
                    top: "246.671875px",
                    left: "245px",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "30px", md: "46px" },
                    color: colors.background,
                  }}
                >
                  Register With Your Resume
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="h7"
                  component="p"
                  sx={{ fontSize: "25px" }}
                >
                  We Will Autofill Your Details
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button
                  startIcon={<UploadIcon />}
                  sx={{
                    border: "1px",
                    borderRadius: "34px",
                    color: colors.black,
                    background: colors.textColor,
                    width: "200px",
                    height: "54px",
                    "&:hover": {
                      backgroundColor: colors.textColor,
                    },
                  }}
                >
                  Upload Resume
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="p"
                  // sx={{ margin: "0 120px",  }}
                  sx={{ textAlign: "center", fontSize: "20px" , color:colors.black}}
                >
                  Supported formats- pdf, doc, docx, csv, rtf, txt files File
                  size should not exceed 5 MB.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>

        {/* It is divider lie between middle left and right */}
        <Divider
          orientation={isMobile ? "horizontal" : "vertical"}
          flexItem
          sx={{
            height: { xs: "1px", sm: "auto" },
            width: isMobile ? "100%" : "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: colors.black,
            "@media (max-width: 600px)": {
              writingMode: "horizontal-tb",
              marginTop: "20px",
              marginBottom: "20px",
            },
          }}
        >
          <Typography variant="body2" component="span" sx={{ mx: 1 }}>
            Or
          </Typography>
        </Divider>

        {/* It is the middle Right Part */}
        <div className="midright">
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2.25}>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      id="name"
                      name="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      InputProps={{ sx: { borderRadius: "33px" } }}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      style={{ marginInline: "10%" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={9}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      InputProps={{ sx: { borderRadius: "33px" } }}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      style={{ marginInline: "10%" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={9}>
                    <TextField
                      id="phone"
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Typography
                              variant="body1"
                              component="span"
                              sx={{ marginRight: "8px" }}
                            >
                              91
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                height: "24px",
                                paddingLeft: "8px",
                                paddingRight: "8px",
                              }}
                            >
                              <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                  height: "100%",
                                  backgroundColor: "rgba(0, 0, 0, 0.54)",
                                }}
                              />
                            </Box>
                          </InputAdornment>
                        ),
                        sx: { borderRadius: "33px" },
                      }}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                      style={{ marginInline: "10%" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={9}>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      InputProps={{ sx: { borderRadius: "33px" } }}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      style={{ marginInline: "10%" }}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            className="circular-checkbox"
                            style={{
                              marginLeft: "80px",
                              borderRadius: "50%",
                              background: colors.textColor,
                              "& .MuiSvgIcon-root": {
                                borderRadius: "50%",
                                background: colors.textColor,
                                color: colors.textColor,
                              },
                            }}
                            color="default"
                          />
                        }
                        label={
                          <Typography variant="body2" style={{ color: colors.black }}>
                            By registering, you agree to{" "}
                            <span style={{ color: colors.background }}>
                              terms & conditions{" "} 
                            </span>
                            &{" "} 
                            <span style={{ color: colors.background }}>privacy policy</span>
                            .
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Button
                      // type="submit"
                      type="button"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        border: "1px",
                        borderRadius: "34px",
                        color: colors.black,
                        background: colors.textColor,
                        width: "200px",
                        height: "54px",
                        "&:hover": {
                          backgroundColor: colors.textColor,
                        },
                        margin: "0 auto", // Center the button horizontally
                      }}
                      onClick={formik.handleSubmit}
                      
                    >
                      Continue
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider
                      style={{ color: colors.black }}
                      variant="middle"
                      sx={{ marginInline: "5%" }}
                    >
                      Or Register With
                    </Divider>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginInline: "18%" }}
                  >
                    {/* <Grid item xs={2}>
                      <img
                        src={Google}
                        alt=""
                        style={{ height: "44px", width: "44px" }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <img
                        src={Facebook}
                        alt=""
                        style={{ height: "44px", width: "44px" }}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <img
                        src={Linkedin}
                        alt=""
                        style={{ height: "44px", width: "44px" }}
                      />
                    </Grid> */}
                    <div className="logoContainer">
                      <img src={Google} alt="" className="logo" />
                      <img src={Facebook} alt="" className="logo" />
                      <img src={Linkedin} alt="" className="logo" />
                    </div>
                  </Grid>

                  <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="center"
                    xs={12}
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ fontSize: "20px" ,color:colors.black}}
                    >
                      Already Have An Account?
                    </Typography>
                    <Button
                      sx={{
                        border: "1px",
                        borderRadius: "34px",
                        color: colors.black,
                        background: colors.textColor,
                        width: "150px",
                        height: "40px",
                        "&:hover": {
                          backgroundColor: colors.textColor,
                        },
                      }}
                    >
                      Log In
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </FormControl>
          </form>
        </div>
      </div>

      {/* It is the End Part */}
      <div className="end">
        <img
          src={Vector2}
          alt=""
          style={{ width: "100%", height: "154px", marginBottom: "-3.7px" }}
        />
      </div>
    </div>
  );
};

export default Register;
