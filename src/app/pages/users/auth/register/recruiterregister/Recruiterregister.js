import React from "react";
import { NavLink, Link } from "react-router-dom";
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
  Autocomplete,
} from "@mui/material";

// import FacebookLoginButton from '../../../../../partials/Facebook';
import Vector1 from "../../../../../assets/img/Vector1.png";
import Vector2 from "../../../../../assets/img/Vector2.png";
import admin from "../../../../../assets/img/admin-01 1.png";
import Google from "../../../../../assets/img/Google.png";
import Facebook from "../../../../../assets/img/Facebook.png";
import Linkedin from "../../../../../assets/img/Linkedin.png";
import Colors from "../../../../../utils/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";
import Axios from "../../../../../utils/Axios";
// import Icondialogue from"../../../../../partials/Icondialogue"
// import { useFormik } from "formik/dist";
// import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import countries from "../../../../../partials/CountryName";

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
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  

  // const validationSchema = Yup.object({
  //   email: Yup.string().required("Email/Username is required"),
  //   password: Yup.string().required("Password is required"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: async (values) => {},
  // });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllActive = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/createussers");
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllActive();
  }, []);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <img
        src={Vector1}
        alt=" "
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
      />
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: { xs: "none", sm: "none", md: "initial" },
          }}
        >
          <img src={admin} alt="" />
        </Box>

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

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            mb: { xs: "50px", md: "20px" },
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "3%",
              color: Colors.palette.background.default,
            }}
          >
            Tell Us About Yourself.
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "5%" }}>
            It Will Take Only Few Minuets.
          </Typography>

          <Container>
            <Grid container spacing={2.24}>
              <Grid item xs={12} sm={10}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  type="email"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                  // style={{ marginInline: "10%" }}
                  sx={{ marginInline: { xs: "0%", sm: "10%" } }}
                />
              </Grid>

              <Grid item xs={12} sm={10}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // error={
                  //   formik.touched.email && Boolean(formik.errors.email)
                  // }
                  // helperText={formik.touched.email && formik.errors.email}
                  sx={{ marginInline: { xs: "0%", sm: "10%" } }}
                />
              </Grid>

              <Grid item xs={12} sm={10}>
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
                          <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 100 }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => `+${option.phone}`}
                            value={selectedCountry}
                            onChange={(event, newValue) => {
                              setSelectedCountry(newValue);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                fullWidth
                                InputProps={{
                                  ...params.InputProps,
                                  autoComplete: "new-password",
                                }}
                              />
                            )}
                          />
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
                  // value={formik.values.phone}
                  // onChange={formik.handleChange}
                  // error={
                  //   formik.touched.phone && Boolean(formik.errors.phone)
                  // }
                  // helperText={formik.touched.phone && formik.errors.phone}
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
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // error={
                  //   formik.touched.password && Boolean(formik.errors.password)
                  // }
                  // helperText={formik.touched.password && formik.errors.password}
                  // style={{ marginInline: "10%" }}
                  sx={{ marginInline: { xs: "0%", sm: "10%" } }}
                />
              </Grid>

              <Grid item xs={12}>
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
                          borderRadius: "50%",
                          background: Colors.palette.primary.backgroundjob,
                          "& .MuiSvgIcon-root": {
                            borderRadius: "50%",
                            background: Colors.palette.primary.backgroundjob,
                            color: Colors.palette.primary.backgroundjob,
                          },
                        }}
                        color="default"
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        style={{ color: Colors.palette.primary.main }}
                      >
                        By registering, you agree to{" "}
                        <span
                          style={{ color: Colors.palette.background.default }}
                        >
                          terms & conditions{" "}
                        </span>
                        &{" "}
                        <span
                          style={{ color: Colors.palette.background.default }}
                        >
                          privacy policy
                        </span>
                        .
                      </Typography>
                    }
                    sx={{ marginInline: { xs: "0%", sm: "10%" } }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                {/* <NavLink to = "/home"> */}
                <Button
                  type="submit"
                  endIcon={<ArrowForwardIcon />}
                  sx={btnstyles}
                  // onClick={formik.handleSubmit}
                >
                  <NavLink to="/userlogin">Continue</NavLink>
                </Button>
                {/* </NavLink> */}
              </Grid>

              <Grid item xs={12}>
                <Divider
                  style={{ color: Colors.palette.primary.main }}
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
              >
                <IconButton type="default">
                  <img src={Google} alt="" />
                </IconButton>
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
                  sx={{ fontSize: "20px", marginRight: "10px" }}
                >
                  Already Have An Account?
                </Typography>

                <Button sx={btnstyles}>
                  <Link to="/adminlogin">Log In</Link>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <img
        src={Vector2}
        alt=""
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
      />
    </Box>
  );
};

export default Login;
