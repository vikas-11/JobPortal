import React, { useEffect, useState } from "react";
import { Container, colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WifiCalling3RoundedIcon from "@mui/icons-material/WifiCalling3Rounded";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useMediaQuery, useTheme } from "@mui/material";
import user from "../../../assets/img/users/User.jpg";
import Colors from "../../../utils/colors";
// import Axios from "../../../utils/axios";

const outlinedButton = {
  fontSize: "14px",
  borderRadius: "20px",
  textTransform: "capitalize",
  color: Colors.palette.primary.color,
  backgroundColor: Colors.palette.background.default,
  margin: "4px",
  "&:hover": {
    color: Colors.palette.primary.main,
    backgroundColor: Colors.palette.primary.color,
  },
};

const icons = {
  backgroundColor: Colors.palette.background.default,
  borderRadius: "10px",
  color: Colors.palette.primary.color,
  fontSize: "20px",
  marginRight: "5px",
};

const button3 = {
  display: "flex",
  borderRadius: "20px",
  textTransform: "capitalize",
  color: Colors.palette.primary.color,
  backgroundColor: Colors.palette.background.default,
  marginTop: "20px",
};

const button4 = {
  display: "flex",
  borderRadius: "20px",
  textTransform: "capitalize",
  color: Colors.palette.primary.main,
  backgroundColor: Colors.palette.primary.backgroundjob,
  marginTop: "20px",
};

const Box1styles = {
  border: "1px solid #6973FE",
  borderRadius: "20px",
  marginTop: "40px",
  padding: "10px",
};

const Box1heading = {
  marginTop: "10px",
  marginBottom: "10px",
  marginLeft:"20px",
  fontSize: "26px",
  textDecoration: "underline",
  textDecorationColor: Colors.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Box2styles = {
  display: "flex",
  flexDirection: "row",
};

const imgUser = {
  width: "50px",
  height: "50px",
  margin: "15px",
};

const text = {
  color: Colors.palette.primary.color,
  borderRadius: "20px",
  backgroundColor: Colors.palette.background.default,
  textAlign: "center",
  padding: "10px",
};

const icons1 = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginLeft: "20px",
  color: Colors.palette.background.default,
};

const buttons = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  gap: "10px",
  marginBottom: "20px",
};

// const lastbox = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

const lastIcon = {
  display: "flex",
  alignItems: "center",
  color: Colors.palette.background.default,
};

const lowerText = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "20px",
};

const contactInfo = {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  lineHeight: "1.2",
  marginBottom: "10px",
};

const Box2heading = {
  marginTop: "10px",
  fontSize: "26px",
  textAlign: "center",
  marginBottom: "10px",
};

const Box3heading = {
  marginTop: "10px",
  fontSize: "26px",
  marginBottom: "10px",
  textDecoration: "underline",
  textDecorationColor: Colors.palette.background.default,
};

const Box3styles = {
  display: "flex",
  flexDirection: "row",
  border: "1px solid #6973FE",
  borderRadius: "20px",
  marginBottom: "10px",
};

const Box3Sub = {
  borderRadius: "20px",
  marginBottom: "10px",
  padding: "8px",
  color: Colors.palette.primary.color,
  backgroundColor: Colors.palette.background.default,
};

const centeredImage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20%",
};

const Box3icons = {
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  marginLeft: "20px",
  color: Colors.palette.background.default,
};

const Box4styles = {
  display: "flex",
  borderRadius: "20px",
  color: Colors.palette.primary.color,
  backgroundColor: Colors.palette.background.default,
  padding: "20px",
};

const Box5styles = {
  display: "flex",
  flexDirection: "row",
};

const Box6styles = {
  display: "flex",
  flexDirection: "row",
};

const Box7styles = {
  display: "flex",
  borderRadius: "20px",
  padding: "20px",
  color: Colors.palette.primary.color,
  backgroundColor: Colors.palette.background.default,
};

const centeredButtons = {
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  gap: "10%",
  marginBottom:"20px"
};

const JobDetailswithEditOption = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useTheme().breakpoints.down("sm");

  //  const [loading, setLoading] = useState(false);
  //   const [data, setData] = useState([]);

  //   const fetchJobDetailswithEditOption = async () => {
  //     try {
  //       const response = await Axios.post("/");
  //       setData(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchJobDetailswithEditOption();
  //   }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Container>
          <Grid container spacing={isMobile ? 1 : 2}>
            <Grid item xs={12} md={4}>
              <Box sx={Box1styles}>
                <Typography sx={Box1heading}>Recruiter Profile</Typography>

                <Box
                  sx={{
                    ...Box2styles,
                    display: "flex",
                    justifyContent: {
                      xs: "center", 
                      sm: "center", 
                      md: "flex-start", 
                    },
                    alignItems: {
                      xs: "center", 
                      sm: "center", 
                      md: "flex-start", 
                    },
                  }}
                >
                  <img src={user} alt="" style={imgUser} />
                  <Box sx={text}>
                    <Typography sx={{ fontSize: "16px" }}>
                      Lorem Ipsum
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      From: XYZ Pvt.Ltd
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      Last Posted Date: 04/06/23
                    </Typography>
                  </Box>
                  <Box sx={icons1}>
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
                    <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                  </Box>
                </Box>

                <Box sx={buttons}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      color: Colors.palette.primary.main,
                      backgroundColor: Colors.palette.primary.color3,
                      fontSize: "14px", 
                    }}
                  >
                    Ratings
                    <KeyboardArrowDownOutlinedIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      color: Colors.palette.primary.color,
                      backgroundColor: Colors.palette.background.default,
                      "&:hover": {
                        color: Colors.palette.primary.main,
                      },
                      fontSize: "14px", 
                    }}
                  >
                    Advance
                    <KeyboardArrowDownOutlinedIcon />
                  </Button>
                </Box>

                <Grid
                  container
                  spacing={2}
                  sx={{
                    margin: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "60%", ...text }}>
                    <Typography sx={{ fontSize: "16px" }}>
                      Senior Hr Recruiter
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      Total Job Posts: 16
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      Joined On: 04/06/22
                    </Typography>
                  </Box>

                  <Box sx={icons1}>
                    <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                  </Box>
                </Grid>


                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center", 
                      sm: "center", 
                      md: "flex-start", 
                    },
                    alignItems: {
                      xs: "center", 
                      sm: "center", 
                      md: "flex-start", 
                    },
                  }}
                >
                  <Typography sx={{ ...Box1heading}}>Contact Details</Typography>
                  <Box sx={lastIcon}>
                    <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    ...lowerText,
                    display: "flex",
                    justifyContent: {
                      xs: "center", 
                      sm: "center", 
                      md: "flex-start", 
                    },
                    alignItems: {
                      xs: "center", 
                      sm: "center", 
                      md: "flex-start", 
                    },
                  }}
                >
                  <Typography sx={contactInfo}>
                    <EmailOutlinedIcon sx={icons} />
                    loremipsum@gmail.com
                  </Typography>
                  <Typography sx={contactInfo}>
                    <CallOutlinedIcon sx={icons} />
                    1234567890
                  </Typography>
                  <Typography sx={contactInfo}>
                    <WifiCalling3RoundedIcon sx={icons} />
                    1234567890
                  </Typography>
                  <Typography sx={contactInfo}>
                    <FmdGoodOutlinedIcon sx={icons} />
                    sa3/169 near KFC sector 0 new delhi 123123
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography sx={Box2heading}>
                Job Details <hr />
              </Typography>

              <Box
                sx={{
                  ...Box3styles,
                  padding: isSmallScreen ? "10px" : "5px",
                }}
              >
                <Grid container spacing={isMobile ? 1 : 2}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={centeredImage}>
                      <img src={user} alt="" style={imgUser} />
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ padding: isSmallScreen ? "10px" : "20px" }}>
                      <Box
                        sx={{
                          ...Box3Sub,
                          fontSize: isSmallScreen ? "20px" : "12px",
                        }}
                      >
                        Lorem Ipsum Solution pvt.ltd
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{ fontSize: isSmallScreen ? "20px" : "16px" }}
                      >
                        Job Profile:{" "}
                        <span
                          style={{
                            color: Colors.palette.background.default,
                            fontSize: isSmallScreen ? "20px" : "inherit",
                          }}
                        >
                          Software Developer
                        </span>
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{ fontSize: isSmallScreen ? "20px" : "16px" }}
                      >
                        Job Type: {" "}
                        <span
                          style={{
                            color: Colors.palette.background.default,
                            fontSize: isSmallScreen ? "20px" : "inherit",
                          }}
                        >
                          Full Time
                        </span>
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: isSmallScreen ? "20px" : "16px" }}
                      >
                        Experience:{" "}
                        <span
                          style={{
                            color: Colors.palette.background.default,
                            fontSize: isSmallScreen ? "20px" : "inherit",
                          }}
                        >
                          0 Years
                        </span>
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: isSmallScreen ? "20px" : "16px" }}
                      >
                        Location:{" "}
                        <span
                          style={{
                            color: Colors.palette.background.default,
                            fontSize: isSmallScreen ? "20px" : "inherit",
                          }}
                        >
                          Varanasi
                        </span>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={Box3icons}>
                      <EditOutlinedIcon
                        sx={{ fontSize: isSmallScreen ? "20px" : "25px" }}
                      />
                      <DeleteOutlineOutlinedIcon
                        sx={{ fontSize: isSmallScreen ? "20px" : "25px" }}
                      />
                      <ErrorOutlineOutlinedIcon
                        sx={{ fontSize: isSmallScreen ? "20px" : "25px" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Typography sx={Box3heading}>Description</Typography>
              <Box sx={Box4styles}>
                <ul>
                  <li>
                    As an Architect, you are responsible for implementing SAP
                    Advanced Business Applications Programming (ABAP) on High
                    Performance Analytic Appliance (HANA).
                  </li>
                  <li>
                    As SAP ABAP on HANA Practitioner, you will possess the
                    knowledge of the following topics and apply them to bring in
                    value and innovation to client engagements:
                  </li>
                  <Box>
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
                    <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                  </Box>
                </ul>
              </Box>

              <Typography sx={Box3heading}>Key Skills</Typography>
              <Box sx={Box5styles}>
                <Grid container rowSpacing={4} columnSpacing={8}>
                  <Grid item xs={12} md={12}>
                    <Box>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Java
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Sap
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Reporting
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Api
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Sap Abap
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Sap Hana
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Sap User
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Core Data
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Sap Fiori
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        InformationSecurity Management
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          ...outlinedButton,
                        }}
                      >
                        Ibm
                      </Button>
                      <Box sx={Box3icons}>
                        <MoreHorizIcon sx={{ fontSize: "20px" }} />
                        <EditOutlinedIcon sx={{ fontSize: "20px" }} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Typography sx={Box3heading}> Qualification</Typography>
              <Box sx={Box6styles}>
                <Button
                  variant="outlined"
                  sx={{
                    ...button3,
                    "&:hover": {
                      color: Colors.palette.primary.main,
                    },
                  }}
                >
                  Graduation
                </Button>
                <Box sx={Box3icons}>
                  <MoreHorizIcon sx={{ fontSize: "20px" }} />
                  <EditOutlinedIcon sx={{ fontSize: "20px" }} />
                </Box>
              </Box>

              <Typography sx={Box3heading}>Company Details</Typography>
              <Box sx={Box7styles}>
                <Typography>
                  IBM’s greatest invention is the IBMer. We believe that
                  progress is made through progressive thinking, progressive
                  leadership, progressive policy and progressive action. IBMers
                  believe that the application of intelligence, reason and
                  science can improve business, society and the human condition.
                  Restlessly reinventing since 1911, we are the largest
                  technology and consulting employer in the world, with more
                  than 380,000 IBMers serving clients in 170 countries.
                  <Box>
                    <MoreHorizIcon sx={{ fontSize: "20px" }} />
                    <EditOutlinedIcon sx={{ fontSize: "20px" }} />
                  </Box>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={centeredButtons}>
            <Button
              variant="outlined"
              sx={{
                ...button3,
                "&:hover": {
                  color: Colors.palette.primary.main,
                },
              }}
            >
              Cancel
            </Button>
            <Button variant="outlined" sx={button4}>
              Save Changes
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default JobDetailswithEditOption;