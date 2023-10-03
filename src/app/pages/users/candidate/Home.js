import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Grid,
  TextField,
  Chip,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

/*========== CSS FILE ============ */
import classes from "./Home.module.css";
import Footer from "../../../partials/Footer";

/*========== IMAGES ============ */
import homeImg from "../../../assets/img/users/Home.jpg";
import img1 from "../../../assets/img/users/Mahindra.jpg";
import img5 from "../../../assets/img/users/Accenture.jpg";
import img4 from "../../../assets/img/users/Capgemini.jpg";
import img2 from "../../../assets/img/users/Cognizant.jpg";
import img6 from "../../../assets/img/users/Hewlett_Packard.jpg";
import img3 from "../../../assets/img/users/Virtual_employe.jpg";
// import Navbar from "../../../partials/Navbar";
// import Axios from "../../../utils/Axios";

import Colors from "../../../utils/colors";
import { Link } from "react-router-dom";

const linkStyle = {
  color: Colors.palette.primary.color,
  textDecoration: "none",
};
const styles = {
  chipContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  chipWrapper: {
    flexWrap: "wrap",
    margin: "5px",
    padding: "8px",
    display: "flex",
    gap: "8px",
  },
  chip: {
    fontSize: "20px",
    padding: "10px",
    backgroundColor: Colors.palette.background.card,
    color: Colors.palette.background.text,
    "&:hover": {
      borderColor: "rgba(0, 0, 0, 0.23)",
      backgroundColor: Colors.palette.primary.color,
      color: Colors.palette.background.card,
    },
  },
};

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: Colors.palette.background.text,
  backgroundColor: "transparent",
  borderRadius: "25px",
  padding: "8px 16px",
  border: "1px solid white",
  height: "55px",
  width: "60%",
  marginBottom: "20px",
};

const searchBarStylesResponsive = {
  height: "auto",
  width: "auto",
};

const iconContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const labelStyles = {
  color: Colors.palette.background.text,
};

const buttonStyles = {
  width: "10%",
  height: "45px",
  borderRadius: "30px",
  backgroundColor: Colors.palette.color.textColor,
  fontSize: "20px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  textTransform: "capitalize",
  color: Colors.palette.primary.main,
  marginRight: "10px",
  marginLeft: "10px",
  "&:hover": {
    color: Colors.palette.background.card,
    backgroundColor: Colors.palette.background.text,
  },
};

const mainStyles = {
  backgroundImage: `url(${homeImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Home = (isLoggedIn) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  return (
    <>
      <Box>
        <div className={classes["home-container"]} style={mainStyles}>
          <Box
            sx={{
              textAlign: "left",
              paddingTop: isSmallScreen ? "30%" : "15%",
              paddingBottom: isSmallScreen ? "20%" : "10%",
            }}
          >
            <Typography
              component="div"
              sx={{
                font: "Poppins",
                fontWeight: "400",
                marginLeft: "20px",
                fontSize: isSmallScreen ? "28px" : "40px",
                flexGrow: 1,
                color: Colors.palette.primary.main,
                whiteSpace: "break-spaces",
                maxWidth: isSmallScreen ? "90%" : "30%",
              }}
            >
              "Find Your Dream Job Today."
            </Typography>

            <Typography
              sx={{
                font: "Poppins",
                fontWeight: "400",
                fontSize: isSmallScreen ? "14px" : "18px",
                flexGrow: 1,
                padding: isSmallScreen ? "10px" : "20px",
                color: Colors.palette.primary.main,
                maxWidth: "50%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: Colors.palette.background.text,
                fontSize: "18px",
                borderRadius: "20px",
                borderColor: "lightgreen",
                margin: "20px",
                width: "180px",
                height: "50px",
              }}
            >
              <Link to="/recruiterjobseeker" style={linkStyle}>
                Register
              </Link>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="form" // Form element to handle form submission
              sx={{
                ...searchBarStyles,
                ...(isSmallScreen && searchBarStylesResponsive),
                flexDirection: isSmallScreen ? "column" : "row",
              }}
            >
              {/* Search Input */}
              <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
                <Box sx={iconContainerStyles}>
                  <Search />
                  <TextField
                    label="Job Title/Role/Skills"
                    variant="outlined"
                    size="small"
                    fullWidth={!isSmallScreen}
                    InputLabelProps={{ style: labelStyles }}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </Box>
              </Grid>

              {/* Location Input */}
              <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
                <Box sx={iconContainerStyles}>
                  <LocationOn />
                  <TextField
                    label="Location"
                    variant="outlined"
                    size="small"
                    fullWidth={!isSmallScreen}
                    InputLabelProps={{ style: labelStyles }}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Box>
              </Grid>

              {/* Experience Input */}
              <Grid item>
                <Box sx={iconContainerStyles}>
                  <WorkOutline />
                  <TextField
                    label="Experience"
                    variant="outlined"
                    size="small"
                    fullWidth={!isSmallScreen}
                    InputLabelProps={{ style: labelStyles }}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Box>
              </Grid>

              {/* Submit Button */}
              <Button type="submit" variant="contained" sx={buttonStyles}>
                <Search />
              </Button>
            </Box>
          </Box>
        </div>

        {/*========== CARDS ============ */}
        <Typography>
          <h1
            className={classes["top_companies"]}
            style={{ color: Colors.palette.background.card }}
          >
            Top Companies
          </h1>
        </Typography>

        <div className={classes["cards-container"]}>
          <div
            className={classes["arrow"]}
            style={{
              color: Colors.palette.background.text,
              backgroundColor: Colors.palette.background.default,
            }}
          >
            <ArrowBackIosSharpIcon />
          </div>

          <div className={classes["card"]}>
            <img src={img1} alt="Green Iguana" />
          </div>

          <div className={classes["card"]}>
            <img src={img2} alt="Green Iguana" />
          </div>

          <div className={classes["card"]}>
            <img src={img3} alt="Green Iguana" />
          </div>

          <div className={classes["card"]}>
            <img src={img4} alt="Green Iguana" />
          </div>

          <div className={classes["card"]}>
            <img src={img5} alt="Green Iguana" />
          </div>

          <div className={classes["card"]}>
            <img src={img6} alt="Green Iguana" />
          </div>

          <div
            className={classes["arrow"]}
            style={{
              color: Colors.palette.background.text,
              backgroundColor: Colors.palette.background.default,
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>

        {/*=========== CHIPS ===========*/}
        <Typography>
          <h1
            className={classes["top_searches"]}
            style={{ color: Colors.palette.background.card }}
          >
            Top Searches
          </h1>
        </Typography>

        <Box sx={styles.chipContainer}>
          <Box sx={styles.chipWrapper}>
            <Chip
              label="Java"
              variant="outlined"
              // InputProps={{ sx: { color: 'text.primary' } }}
              sx={styles.chip}
            />
            <Chip label="IT" variant="outlined" sx={styles.chip} />
            <Chip label="HR" variant="outlined" sx={styles.chip} />
            <Chip
              label="Work from Home Jobs"
              variant="outlined"
              sx={styles.chip}
            />
            <Chip label="Freshers" variant="outlined" sx={styles.chip} />
            <Chip label="Banking" variant="outlined" sx={styles.chip} />
            <Chip label="Sales" variant="outlined" sx={styles.chip} />
            <Chip
              label="Software Engineer"
              variant="outlined"
              sx={styles.chip}
            />
            <Chip label="Accounting" variant="outlined" sx={styles.chip} />
            <Chip
              label="Business Analyst"
              variant="outlined"
              sx={styles.chip}
            />
            <Chip label="Data Analyst" variant="outlined" sx={styles.chip} />
            <Chip label="DevOps Engineer" variant="outlined" sx={styles.chip} />
            <Chip
              label="Digital Marketing"
              variant="outlined"
              sx={styles.chip}
            />
          </Box>
        </Box>

        {/*=========== BLOCKS ===========*/}

        {/*====== block 1 ======*/}

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <div className={classes["block"]}>
            <div className={classes["sub-block"]}>
              <div className={classes["btn-primary"]}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: Colors.palette.primary.main,
                    borderColor: "#7797FE",
                  }}
                >
                  Recommended
                </Button>
              </div>

              <Typography
                className={classes["centered-content"]}
                style={{ color: Colors.palette.background.card }}
              >
                <h1>Full Stack Developer</h1>
                <h3
                  className={classes["centered-content"]}
                  style={{ color: Colors.palette.primary.main }}
                >
                  Lorem Ipsum Private Limited
                </h3>
              </Typography>
              <p className={classes["text"]}>4 hours Ago</p>
            </div>

            <div className={classes["bottom"]}>
              <div className={classes["logo"]}>
                <Typography
                  className={classes["logo-content"]}
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    fontWeight: "100",
                  }}
                >
                  <BusinessCenterOutlinedIcon
                    fontSize="large"
                    style={{ marginRight: "8px" }}
                  />
                  0 To 5 Years Experience
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    <PlaceOutlinedIcon fontSize="large" />
                  </Box>
                  Noida
                </Typography>
              </div>

              <Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: Colors.palette.primary.main,
                    borderColor: Colors.palette.background.card,
                    fontSize: "10px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: Colors.palette.primary.main,
                    borderColor: Colors.palette.background.card,
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  Not Interested
                </Button>
              </Typography>
            </div>
          </div>
        </Box>

        {/* Display for xs break point 0 to 599px */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className={classes["block"]}>
                <div className={classes["sub-block"]}>
                  <div className={classes["btn-primary"]}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                      }}
                    >
                      Recommended
                    </Button>
                  </div>

                  <Typography
                    className={classes["centered-content"]}
                    style={{ color: Colors.palette.background.card }}
                  >
                    <h1>Full Stack Developer</h1>
                    <h3
                      className={classes["centered-content"]}
                      style={{ color: Colors.palette.primary.main }}
                    >
                      Lorem Ipsum Private Limited
                    </h3>
                  </Typography>
                  <p className="text">4 hours Ago</p>
                </div>

                <div className={classes["bottom"]}>
                  <div className={classes["logo"]}>
                    <Typography
                      className={classes["logo-content"]}
                      style={{
                        fontSize: "18px",
                        display: "flex",
                        fontWeight: "100",
                      }}
                      // sx={{ marginLeft:{xs:"-70%",sm:"10%"}}}
                    >
                      <BusinessCenterOutlinedIcon
                        fontSize="large"
                        style={{ marginRight: "8px" }}
                        // sx={{marginLeft:{xs:"-0%",sm:"10%"}}}
                      />
                      <b> 0 To 5 Years Experience</b>
                      <Box sx={{ flex: 1, textAlign: "center" }}>
                        <PlaceOutlinedIcon fontSize="large" />
                      </Box>
                      {/* //s                  x={{marginLeft:{xs:"-150%",sm:"10%"}}} */}
                      <b> Noida</b>
                    </Typography>
                  </div>

                  <Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                        marginRight: "10px",
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Not Interested
                    </Button>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/*====== block 2 ======*/}
        {/* Display for Sm break point */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <div className={classes["block"]}>
            <div className={classes["sub-block"]}>
              <div className={classes["btn-primary"]}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: Colors.palette.primary.main,
                    borderColor: Colors.palette.background.card,
                  }}
                >
                  Recommended
                </Button>
              </div>

              <Typography
                className={classes["centered-content"]}
                style={{ color: Colors.palette.background.card }}
              >
                <h1>Web Designer</h1>
                <h3
                  className={classes["centered-content-sub"]}
                  style={{ color: Colors.palette.primary.main }}
                >
                  Lorem Ipsum Private Limited
                </h3>
              </Typography>
              <p className={classes["text"]}>9 hours Ago</p>
            </div>

            <div className={classes["bottom"]}>
              <div className={classes["logo"]}>
                <Typography
                  className={classes["logo-content"]}
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    fontWeight: "100",
                  }}
                >
                  <BusinessCenterOutlinedIcon
                    fontSize="large"
                    style={{ marginRight: "8px" }}
                  />
                  1 To 5 Years Experience
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    <PlaceOutlinedIcon fontSize="large" />
                  </Box>
                  Noida
                </Typography>
              </div>

              <Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: Colors.palette.primary.main,
                    borderColor: Colors.palette.background.card,
                    fontSize: "10px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: Colors.palette.primary.main,
                    borderColor: Colors.palette.background.card,
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  Not Interested
                </Button>
              </Typography>
            </div>
          </div>
        </Box>

        {/* Dislay only Xs break point */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className={classes["block"]}>
                <div className={classes["sub-block"]}>
                  <div className={classes["btn-primary"]}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                      }}
                    >
                      Recommended
                    </Button>
                  </div>

                  <Typography
                    className={classes["centered-content"]}
                    style={{ color: Colors.palette.background.card }}
                  >
                    <h1>Web Designer</h1>
                    <h3
                      className={classes["centered-content-sub"]}
                      style={{ color: Colors.palette.primary.main }}
                    >
                      Lorem Ipsum Private Limited
                    </h3>
                  </Typography>
                  <p className={classes["text"]}>9 hours Ago</p>
                </div>

                <div className={classes["bottom"]}>
                  <div className={classes["logo"]}>
                    <Typography
                      className={classes["logo-content"]}
                      style={{
                        fontSize: "18px",
                        display: "flex",
                        fontWeight: "100",
                      }}
                      //sx={{ marginLeft:{xs:"-70%",sm:"10%"}}}
                    >
                      <BusinessCenterOutlinedIcon
                        fontSize="large"
                        style={{ marginRight: "8px" }}
                        //  sx={{marginLeft:{xs:"-0%",sm:"10%"}}}
                      />
                      <b> 1 To 5 Years Experience</b>
                      <Box sx={{ flex: 1, textAlign: "center" }}>
                        <PlaceOutlinedIcon
                          fontSize="large"
                          // sx={{marginLeft:{xs:"-150%",sm:"10%"}}}
                        />
                      </Box>
                      <b> Noida</b>
                    </Typography>
                  </div>

                  <Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                        marginRight: "10px",
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Not Interested
                    </Button>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/*====== block 3 ======*/}
        {/* Dislay only Xs break point */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className={classes["block"]}>
                <div className={classes["sub-block"]}>
                  <div className={classes["btn-primary"]}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                      }}
                    >
                      Recommended
                    </Button>
                  </div>

                  <Typography
                    className={classes["centered-content"]}
                    style={{ color: Colors.palette.background.card }}
                  >
                    <h1>Sr Software Developer</h1>
                    <h3
                      className={classes["centered-content-sub"]}
                      style={{ color: Colors.palette.primary.main }}
                    >
                      Lorem Ipsum Private Limited
                    </h3>
                  </Typography>
                  <p className={classes["text"]}>9 hours Ago</p>
                </div>

                <div className={classes["bottom"]}>
                  <div className={classes["logo"]}>
                    <Typography
                      className={classes["logo-content"]}
                      style={{
                        fontSize: "18px",
                        display: "flex",
                        fontWeight: "100",
                      }}
                      //sx={{ marginLeft:{xs:"-70%",sm:"10%"}}}
                    >
                      <BusinessCenterOutlinedIcon
                        fontSize="large"
                        style={{ marginRight: "8px" }}
                        //  sx={{marginLeft:{xs:"-0%",sm:"10%"}}}
                      />
                      <b> 0 To 3 Years Experience</b>
                      <Box sx={{ flex: 1, textAlign: "center" }}>
                        <PlaceOutlinedIcon
                          fontSize="large"
                          // sx={{marginLeft:{xs:"-150%",sm:"10%"}}}
                        />
                      </Box>
                      <b> Delhi</b>
                    </Typography>
                  </div>

                  <Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                        marginRight: "10px",
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Not Interested
                    </Button>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/* dispaly break point in sm  */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid Container spacing={5}>
            <Grid item xs={12}>
              <div className={classes["block"]}>
                <div className={classes["sub-block"]}>
                  <div className={classes["btn-primary"]}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                      }}
                    >
                      Recommended
                    </Button>
                  </div>

                  <Typography
                    className={classes["centered-content"]}
                    style={{ color: Colors.palette.background.card }}
                  >
                    <h1>Sr Software Developer</h1>
                    <h3
                      className={classes["centered-content-sub"]}
                      style={{ color: Colors.palette.primary.main }}
                    >
                      Lorem Ipsum Private Limited
                    </h3>
                  </Typography>
                  <p className={classes["text"]}>1 day Ago</p>
                </div>

                <div className={classes["bottom"]}>
                  <div className={classes["logo"]}>
                    <Typography
                      className={classes["logo-content"]}
                      style={{
                        fontSize: "24px",
                        display: "flex",
                        fontWeight: "100",
                      }}
                    >
                      <BusinessCenterOutlinedIcon
                        fontSize="large"
                        style={{ marginRight: "8px" }}
                      />
                      0 To 3 Years Experience
                      <Box sx={{ flex: 1, textAlign: "center" }}>
                        <PlaceOutlinedIcon fontSize="large" />
                      </Box>
                      Delhi
                    </Typography>
                  </div>

                  <Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                        marginRight: "10px",
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        color: Colors.palette.primary.main,
                        borderColor: Colors.palette.background.card,
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Not Interested
                    </Button>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/*============ FOOTER ==============*/}
        <Footer />
      </Box>
    </>
  );
};

export default Home;
