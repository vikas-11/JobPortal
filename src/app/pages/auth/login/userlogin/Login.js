import React, { useEffect, useState } from "react";
import "./Login.css";
import {
  TextField,
  Button,
  FormControl,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Vector1 from "../../../../assets/img/Vector1.png";
import Vector2 from "../../../../assets/img/Vector2.png";
import Google from "../../../../assets/img/Google.png";
import Facebook from "../../../../assets/img/Facebook.png";
import Linkedin from "../../../../assets/img/Linkedin.png";
import Just from "../../../../assets/img/Just a step light-01 1.png";
import Frame from "../../../../assets/img/Frame 2.png";
import colors from "../../../../utils/colors";
import Axios from "../../../../utils/axios";

const Login = () => {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const GetUserLogin = async () => {
  //   try {
  //     const response = await Axios.get("/login");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   GetUserLogin();
  // }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validationSchema = Yup.object({
    email: Yup.string().required("Email/Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // try {
      //   const response = await Axios.get("/login", values); 
      //   if (response.data.success) {
      //     console.log("Login successful");
      //   } else {
      //     console.log("Login failed");
      //   }
      // } catch (error) {
      //   console.error("An error occurred during login", error);
      // }
    },
  });


  return (
    <div className="top">
      <div className="top1">
        <img
          src={Vector1}
          alt=""
          style={{
            width: "100%",
            height: "218.06px",
            top: "-2px",
            left: "-3px",
          }}
        />
      </div>

      {/* <Typography
        style={{
          position: "absolute",
          top: "79px",
          right: "500px",
          fontSize: "36px",
          lineHeight: "54px",
          fontWeight: "600",
          fontFamily: "Poppins",
          color: "#6973FE",
          width: "98px",
          height: "54px",
        }}
      >
        LogIn
      </Typography> */}

      {/* It is the middle Part */}
      <div className="middle">
        <div className="midleft">
          <img
            src={Frame}
            alt="img"
            style={{
              width: isMobile ? "100%" : "537px",
              height: isMobile ? "auto" : "324px",
              gap: "6px",
            }}
          />
          <img
            src={Just}
            alt="img"
            style={{
              width: "340px",
              height: "527px",
              top: "347px",
              left: "329px",
            }}
          />
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
            color: "#000000",
            "@media (max-width: 600px)": {
              writingMode: "horizontal-tb",
              marginTop: "20px",
              marginBottom: "20px",
            },
          }}
        ></Divider>

        {/* It is the middle Right Part */}
        <div className="midright">
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2.24}>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email/Username"
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
                      id="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        sx: { borderRadius: "33px" },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
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
                            className="circular-checkbox"
                            style={{
                              marginLeft: "100px",
                              borderRadius: "50%",
                              background: colors.textColor,
                              "& .MuiSvgIconRoot": {
                                borderRadius: "50%",
                                background: colors.textColor,
                                color: colors.textColor,
                              },
                            }}
                            color="default"
                            onChange={handleChange}
                          />
                        }
                        label={
                          <Typography
                            variant="body2"
                            style={{ color: colors.black }}
                          >
                            Keep Me Signed in
                          </Typography>
                        }
                      />

                      <Typography
                        variant="body2"
                        style={{
                          color: colors.background,
                          marginLeft: "100px",
                        }}
                      >
                        Forgot Password
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Button
                      type="submit"
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
                    >
                      Login
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider
                      style={{ color: colors.black }}
                      variant="middle"
                      sx={{ marginInline: "5%" }}
                    >
                      <Typography variant="h4"> Or </Typography>
                    </Divider>
                  </Grid>

                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Button
                      type="submit"
                      sx={{
                        border: colors.shadow, // Set the border color
                        borderRadius: "34px",
                        color: colors.black,
                        background: colors.color,
                        width: "200px",
                        height: "54px",
                        margin: "0 auto", // Center the button horizontally
                      }}
                    >
                      LogIn via OTP
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider
                      style={{ color: colors.black }}
                      variant="middle"
                      sx={{ marginInline: "5%" }}
                    >
                      <Typography variant="h4">Or</Typography>
                    </Divider>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    container
                    alignItems="center"
                    justifyContent="center"
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
                      sx={{ fontSize: "20px", color: colors.black }}
                    >
                      Don’t Have Account?
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
                      Register
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
          style={{
            width: "100%",
            height: "154px",
            // transform: "rotate(180deg)",
            marginBottom: "-3.7px",
          }}
        />
      </div>
    </div>
  );
};

export default Login;
