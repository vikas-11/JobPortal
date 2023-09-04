import React, { useEffect, useState } from "react";
import { Container, colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Navbar from "../../../partials/Navbar3";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WifiCalling3RoundedIcon from "@mui/icons-material/WifiCalling3Rounded";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useMediaQuery, useTheme } from "@mui/material";
import "./JobDetailswithEditOption.css";
import user from "../../../assets/img/users/User.jpg";
import Axios from "../../../utils/axios";

const drawerWidth = 280;

const styles = {
  pagination: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

const outlinedButton = {
  fontSize: "14px",
  borderRadius: "20px",
  textTransform: "capitalize",
  color: "white",
  backgroundColor: "#6973FE",
  margin: "4px",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
};

const button1 = {
  borderRadius: "20px",
  textTransform: "capitalize",
  color: "black",
  backgroundColor: "#FFC804",
};

const icons = {
  backgroundColor: "#6973FE",
  borderRadius: "20px",
  color: "white",
  fontSize: "20px",
  marginRight: "5px",
};

const button2 = {
  borderRadius: "20px",
  textTransform: "capitalize",
  color: "white",
  backgroundColor: "#6973FE",
};

const button3 = {
  display: "flex",
  borderRadius: "20px",
  textTransform: "capitalize",
  color: "white",
  backgroundColor: "#6973FE",
  marginTop: "20px",
};

const button4 = {
  display: "flex",
  borderRadius: "20px",
  textTransform: "capitalize",
  color: "black",
  backgroundColor: "#CCFFCC",
  marginTop: "20px",
};
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    backgroundColor: "transparent",
    boxShadow: "none",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ResponsiveDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: "#6973FE",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    zIndex: 1,
    ...(open && {
      width: "100%",
    }),
    ...(!open && {
      width: "0",
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      backgroundColor: "#6973FE",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      ...(open && {
        width: drawerWidth,
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
      ...(!open && {
        width: 0,
      }),
    },
  },
}));

const JobDetailswithEditOption = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    
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
        <AppBar
          position="fixed"
          open={open}
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography noWrap sx={{ marginLeft: "5%" }}>
              <Navbar />
            </Typography>
          </Toolbar>
        </AppBar>

        <ResponsiveDrawer variant="permanent" open={open}>
          <List
            sx={{
              marginLeft: "10px",
              marginTop: "10px",
              borderRadius: "50px",
              marginBottom: "10px",
              backgroundColor: "#6973FE",
              height: "100%",
              position: "relative",
              display: "flex",
            }}
          >
            <List>
              {["Grid", "Search"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "flex" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 50,
                      justifyContent: open ? "initial" : "center",
                      px: 1.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? (
                        <AutoAwesomeMosaicOutlinedIcon
                          sx={{ fontSize: "30px" }}
                        />
                      ) : (
                        <FindInPageOutlinedIcon sx={{ fontSize: "30px" }} />
                      )}
                    </ListItemIcon>

                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              {["Grid", "Search"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block", color: "#7797FE" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 50,
                      justifyContent: open ? "initial" : "center",
                      px: 1.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? (
                        <AccountBoxOutlinedIcon sx={{ fontSize: "30px" }} />
                      ) : (
                        <BusinessCenterOutlinedIcon sx={{ fontSize: "30px" }} />
                      )}
                    </ListItemIcon>

                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <div sx={styles.bottomIcons}>
                {["Home", "Log Out"].map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 60,
                        justifyContent: open ? "initial" : "center",
                        px: 1.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: "white",
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {index % 2 === 0 ? (
                          <HomeOutlinedIcon
                            sx={{
                              marginTop: open ? "10px" : "220px",
                              fontSize: "30px",
                            }}
                          />
                        ) : (
                          <LogoutOutlinedIcon sx={{ fontSize: "30px" }} />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </div>
            </List>
          </List>
        </ResponsiveDrawer>

        <div className="full-container">
          <DrawerHeader />

          <div className="main">
            <Grid container spacing={isMobile ? 1 : 2}>
              <Grid item xs={12} md={4}>
                <Box className="div1styles">
                  <h1 className="div1heading">Recruiter Profile </h1>

                  <Box className="div2styles">
                    <img src={user} alt="" className="imgUser" />
                    <Box className="text">
                      <h3>Lorem Ipsum</h3>
                      <h4>From: XYZ Pvt.Ltd</h4>
                      <h4>Last Posted Date: 04/06/23</h4>
                    </Box>
                    <Box className="icons">
                      <MoreHorizIcon sx={{ fontSize: "25px" }} />
                      <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                    </Box>
                  </Box>

                  <Box className="buttons">
                    <Button variant="outlined" sx={button1}>
                      Ratings
                      <KeyboardArrowDownOutlinedIcon />
                    </Button>
                    <Button variant="outlined" sx={button2}>
                      Advance
                      <KeyboardArrowDownOutlinedIcon />
                    </Button>
                  </Box>

                  <Grid container spacing={2} sx={{ margin: "20px" }}>
                    <Box className="text" sx={{ width: "60%" }}>
                      <h3>Senior Hr Recruiter</h3>
                      <h4>Total Job Posts: 16</h4>
                      <h4>Joined On: 04/06/22</h4>
                    </Box>

                    <Box className="icons">
                      <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                    </Box>
                  </Grid>

                  <Box className="lastbox">
                    <h2>Contact Details </h2>
                    <Box className="lastIcon">
                      <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                    </Box>
                  </Box>
                  <Box className="lowerText">
                    <span className="contactInfo">
                      <EmailOutlinedIcon sx={icons} />
                      loremipsum@gmail.com
                    </span>
                    <span className="contactInfo">
                      <CallOutlinedIcon sx={icons} />
                      1234567890
                    </span>
                    <span className="contactInfo">
                      <WifiCalling3RoundedIcon sx={icons} />
                      1234567890
                    </span>
                    <span className="contactInfo">
                      <FmdGoodOutlinedIcon sx={icons} />
                      sa3/169 near KFC sector 0 new delhi 123123
                    </span>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={8}>
                <h1 className="div2heading">
                  Job Details <hr />
                </h1>

                <Box className="div3styles">
                  <Box className="centered-image">
                    <img src={user} alt=""  />
                  </Box>
                  <Box className="div3text">
                    <Button
                      variant="outlined"
                      sx={{ ...button3, fontSize: "18px" }}
                    >
                      Lorem Ipsum Solution pvt.ltd
                    </Button>
                    <h3>
                      Job Profile:{" "}
                      <span className="highlightedtext">
                        Software Developer
                      </span>
                    </h3>
                    <h3>
                      Job Type:
                      <span className="highlightedtext">Full Time</span>{" "}
                    </h3>
                    <h3>
                      Experience:
                      <span className="highlightedtext"> 0 Years</span>
                    </h3>
                    <h3>
                      Location:{" "}
                      <span className="highlightedtext">Varanasi</span>
                    </h3>
                  </Box>
                  <Box className="div3icons">
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
                    <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                    <ErrorOutlineOutlinedIcon sx={{ fontSize: "25px" }} />
                  </Box>
                </Box>
                <h2>Description</h2>
                <Box className="div4styles">
                  <ul>
                    <li>
                      As an Architect, you are responsible for implementing SAP
                      Advanced Business Applications Programming (ABAP) on High
                      Performance Analytic Appliance (HANA).
                    </li>
                    <li>
                      As SAP ABAP on HANA Practitioner, you will possess the
                      knowledge of the following topics and apply them to bring
                      in value and innovation to client engagements:
                    </li>
                    <Box className="div4icons">
                      <MoreHorizIcon sx={{ fontSize: "25px" }} />
                      <EditOutlinedIcon sx={{ fontSize: "25px" }} />
                    </Box>
                  </ul>
                </Box>

                <h2>Key Skills</h2>
                <Box className="div5styles">
                  <Grid container rowSpacing={4} columnSpacing={8}>
                    <Grid item xs={12} md={12}>
                      <div className="div5buttons">
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
                        <Box className="div3icons">
                          <MoreHorizIcon sx={{ fontSize: "20px" }} />
                          <EditOutlinedIcon sx={{ fontSize: "20px" }} />
                        </Box>
                      </div>
                    </Grid>
                  </Grid>
                </Box>

                <h2>Qualification</h2>
                <Box className="div6styles">
                  <Button variant="outlined" sx={button3}>
                    Graduation
                  </Button>
                  <Box className="div3icons">
                    <MoreHorizIcon sx={{ fontSize: "20px" }} />
                    <EditOutlinedIcon sx={{ fontSize: "20px" }} />
                  </Box>
                </Box>

                <h2>Company Details</h2>
                <Box className="div7styles">
                  <span>
                    IBM’s greatest invention is the IBMer. We believe that
                    progress is made through progressive thinking, progressive
                    leadership, progressive policy and progressive action.
                    IBMers believe that the application of intelligence, reason
                    and science can improve business, society and the human
                    condition. Restlessly reinventing since 1911, we are the
                    largest technology and consulting employer in the world,
                    with more than 380,000 IBMers serving clients in 170
                    countries.
                    <Box className="div7icons">
                      <MoreHorizIcon sx={{ fontSize: "20px" }} />
                      <EditOutlinedIcon sx={{ fontSize: "20px" }} />
                    </Box>
                  </span>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div className="centered-buttons">
            <Button variant="outlined" sx={{ ...button3 }}>
              Cancel
            </Button>
            <Button variant="outlined" sx={button4}>
              Save Changes
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default JobDetailswithEditOption;
