import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Vector1 from "../../../../../assets/img/Vector1.png";
import Vector2 from "../../../../../assets/img/Vector2.png";
import admin from "../../../../../assets/img/admin-01 1.png";
import Google from "../../../../../assets/img/Google.png";
import Facebook from "../../../../../assets/img/Facebook.png";
import Linkedin from "../../../../../assets/img/Linkedin.png";
import Colors from "../../../../../utils/colors";
// import Frame from "../../../../../assets/img/Frame 2.png";
// import { useFormik } from "formik/dist";
// import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import Icondialogue from "../../../../../partials/Icondialogue";

const btnstyles = {
  color: Colors.palette.primary.main,
  backgroundColor: Colors.palette.primary.backgroundjob,
  border: "1px solid #CCFFCC",
  borderRadius: "30px",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);",
  width: "200px",
  height: "54px",
  "&:hover": {
    backgroundColor: Colors.palette.primary.color,
    border: "1px solid #6973FE",
  },
  margin: "0 10px",
};

const Login = () => {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //   const validationSchema = Yup.object({
  //     email: Yup.string().required("Email/Username is required"),
  //     password: Yup.string().required("Password is required"),
  //   });

  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: async (values) => {},
  //   });

  

  return (
    <Box sx={{ overflow: "hidden" }}>
      <img
        alt=""
        src={Vector1}
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
      />
      <Box sx={{ display: { xs: "Block", md: "flex" } }}>
        {/************************************ left part **************************/}

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally
            textAlign: "center", // Center text
            display: { xs: "none", sm: "none", md: "initial" },
          }}
        >
          <Typography>
            <img src={admin} alt="" />
          </Typography>
        </Box>

        {/**************** divider between left and right ***************/}

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: { xs: "1px", sm: "auto" },
            width: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: Colors.palette.primary.main,
            "@media (max-width: 900px)": {
              display: "none",
            },
          }}
        ></Divider>

        {/*************************** Right part ************************/}

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            mb: { xs: "50px", md: "20px" },
            height: "auto",
            justifyContent: "center", // Center content vertically
            alignItems: "center",
            textAlign: "center", // Center content horizontally
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginY: "5%", color: Colors.palette.background.default }}
          >
            Login
          </Typography>
          <Container>
            <Grid container spacing={2.24}>
              <Grid item xs={12} sm={10}>
                <TextField
                  id="email"
                  name="email"
                  label="Email/Username"
                  type="email"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                  //   value={formik.values.email}
                  //   onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  //   helperText={formik.touched.email && formik.errors.email}
                  // style={{ marginInline: "10%" }}
                  sx={{ marginInline: { xs: "0%", sm: "10%" } }}
                />
              </Grid>

              <Grid item xs={12} sm={10}>
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  //   value={formik.values.password}
                  //   onChange={formik.handleChange}
                  //   error={
                  //     formik.touched.password && Boolean(formik.errors.password)
                  //   }
                  //   helperText={formik.touched.password && formik.errors.password}
                  // style={{ marginInline: "10%" }}
                  sx={{ marginInline: { xs: "0%", sm: "10%" } }}
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
                          // marginLeft: "100px",
                          borderRadius: "50%",
                          background: Colors.palette.primary.backgroundjob,
                          "& .MuiSvgIconRoot": {
                            borderRadius: "50%",
                            background: Colors.palette.primary.backgroundjob,
                            color: Colors.palette.primary.backgroundjob,
                          },
                        }}
                        sx={{ marginLeft: { xs: "10px", sm: "100px" } }}
                        // color="default"
                        onChange={handleChange}
                      />
                    }
                    label={
                      <Typography variant="body2">Keep Me Signed in</Typography>
                    }
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      // color: Colors.background,
                      marginLeft: { xs: "10px", sm: "100px" },
                      color: Colors.palette.background.default,
                    }}
                  >
                    Forgot Password
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  sx={btnstyles}
                  // onClick={formik.handleSubmit}
                >
                  <NavLink
                    to="/dashboard"
                    style={{ color: Colors.palette.primary.main }}
                  >
                    Login
                  </NavLink>
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Divider
                  style={{ color: Colors.palette.primary.main }}
                  variant="middle"
                  sx={{ marginInline: "5%" }}
                >
                  <Typography variant="h4"> Or </Typography>
                </Divider>
              </Grid>

              <Grid
                item
                xs={12}
                container
                alignItems="center"
                justifyContent="center"
              >
                <IconButton type="default">
                  <img src={Google} alt="" />
                </IconButton>
                {/* <Icondialogue /> */}
                <IconButton type="default">
                  <img src={Facebook} alt="" />
                </IconButton>
                <IconButton type="default">
                  <img src={Linkedin} alt="" />
                </IconButton>
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
                  sx={{
                    fontSize: "20px",
                    color: Colors.palette.primary.main,
                    marginRight: "10px",
                  }}
                >
                  Don’t Have Account?
                </Typography>
                <Button sx={btnstyles}>
                  <NavLink
                    to="/adminregister"
                    style={{ color: Colors.palette.primary.main }}
                  >
                    Register
                  </NavLink>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <img
        alt=""
        src={Vector2}
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
      />
    </Box>
  );
};

export default Login;
