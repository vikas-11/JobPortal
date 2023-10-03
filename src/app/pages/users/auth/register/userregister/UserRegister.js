import React, { useState, useRef } from "react";
// import { Link } from 'react-router-dom';
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

import Vector1 from "../../../../../assets/img/Vector1.png";
import Vector2 from "../../../../../assets/img/Vector2.png";
import img1 from "../../../../../assets/img/Group4.png";
import Google from "../../../../../assets/img/Google.png";
import Facebook from "../../../../../assets/img/Facebook.png";
import Linkedin from "../../../../../assets/img/Linkedin.png";
import Colors from "../../../../../utils/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { NavLink } from "react-router-dom";
// import { useFormik } from "formik/dist";
// import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import countries from "../../../../../partials/CountryName";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

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

const UserRegister = () => {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);
    }
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

  return (
    <Box sx={{ overflow: "hidden" }}>
      <img
        src={Vector1}
        alt=" "
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
      />
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <Grid item xs={12} md={4} sx={style}>
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
            <img src={img1} alt="" />
            <Typography
              variant="h4"
              sx={{
                marginBottom: "3%",
                color: Colors.palette.background.default,
              }}
            >
              Register With Your Resume
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: "5%" }}>
              We Will Autofill your Details
            </Typography>

            {/* <Button variant="outlined" sx={btnstyles}>
              <FileUploadOutlinedIcon />
              Upload Resume
            </Button> */}

            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileSelect}
              ref={fileInputRef}
            />
            <Button
              variant="outlined"
              onClick={handleButtonClick}
              startIcon={<FileUploadOutlinedIcon />}
              sx={btnstyles}
            >
              Upload Resume
            </Button>

            <Typography variant="h6" sx={{ margin: "5%" }}>
              Supported formats- pdf, doc, docx, csv, rtf, txt files File size
              should not exceed 5 MB
            </Typography>
          </Box>
        </Grid>

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
                <Button
                  // component={Link}
                  // to="/dashboard"
                  type="submit"
                  endIcon={<ArrowForwardIcon />}
                  sx={btnstyles}
                  // onClick={formik.handleSubmit}
                >
                  Continue
                </Button>
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
                  sx={{ fontSize: "20px", color: Colors.palette.primary.main }}
                >
                  Already Have An Account?
                </Typography>
                <Button
                  // component={Link}
                  // to="/adminlogin"
                  sx={btnstyles}
                >
                  Log In
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

export default UserRegister;
