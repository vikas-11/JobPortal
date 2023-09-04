import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
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
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Pagination from "@mui/material/Pagination";

import { useMediaQuery, useTheme } from "@mui/material";
// import { makeStyles } from '@mui/styles';

import Navbar from "../../../partials/Navbar3";
import "../admin/JobList.css";
import img1 from "../../../assets/img/users/User.png";
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

// const useStyles = makeStyles((theme) => ({
//     customPagination: {
//         '& .MuiPaginationItem-root': {
//             margin: '0 20px',
//             minWidth: '30px',
//           },
//       '& .MuiPaginationItem-page': {
//         backgroundColor: '#F0F0F0',
//         '&:hover': {
//           backgroundColor: '#7797FE',
//           color:"white"
//         },
//         '&.Mui-selected': {
//             backgroundColor: '#6973FE',
//             color:"white"
//         },
//       },

//     },
//   }));

const buttons = {
  borderColor: "#6973FE",
  backgroundColor: "#6973FE",
  color: "white",
  borderRadius: "20px",
  margin: "10px",
};

const icons = {
  color: "#6973FE",
  marginLeft: "10px",
};
const chipsStyles = {
  backgroundColor: "#6973FE",
  color: "white",
};
const chipsStyles1 = {
  backgroundColor: "#CCFFCC",
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
  //   const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchJobDetailswithEditOption = async () => {
  //   try {
  //     const response = await Axios.post("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchJobDetailswithEditOption();
  // }, []);

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
          <Container maxWidth="xl">
            <Box
              className="heading"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "20px",
              }}
            >
              <span>Active</span>
              <span>Inactive</span>
              <span>Pending</span>
              <span>All</span>
              <SortIcon />
              <span>Sort By: </span>
              <ExpandMoreIcon
                sx={{
                  border: "1px solid #6973FE",
                  borderRadius: "10px",
                  paddingLeft: "25px",
                }}
              />
            </Box>
            <hr />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={7} md={6} lg={4}>
                <div className="main">
                  <div classname="box1">
                    <Grid container spacing={4}>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          React
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Java
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Python
                        </Button>
                      </Grid>

                      <Grid item xs={3}>
                        <MoreHorizIcon sx={icons} />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box2">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src={img1} alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <span>Company Name</span>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box3">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <span>Description :</span>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          - Able to work in good coordination with production
                          managers and Developers.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box4">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>Posted Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Expected Salary</Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box5">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              2023-06-01 02:00:03
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              5.4 LPA
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box6">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>
                          Total Applied{" "}
                          <Chip
                            label={
                              <Typography
                                variant="body2"
                                style={{ fontSize: "12px", color: "white" }}
                              >
                                23
                              </Typography>
                            }
                            sx={chipsStyles}
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px" }}
                            >
                              Active
                            </Typography>
                          }
                          sx={chipsStyles1}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={7} md={6} lg={4}>
                <div className="main">
                  <div classname="box1">
                    <Grid container spacing={4}>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          React
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Java
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Python
                        </Button>
                      </Grid>

                      <Grid item xs={3}>
                        <MoreHorizIcon sx={icons} />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box2">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src={img1} alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <span>Company Name</span>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box3">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <span>Description :</span>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          - Able to work in good coordination with production
                          managers and Developers.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box4">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>Posted Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Expected Salary</Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box5">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              2023-06-01 02:00:03
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              5.4 LPA
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box6">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>
                          Total Applied{" "}
                          <Chip
                            label={
                              <Typography
                                variant="body2"
                                style={{ fontSize: "12px", color: "white" }}
                              >
                                23
                              </Typography>
                            }
                            sx={chipsStyles}
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px" }}
                            >
                              Active
                            </Typography>
                          }
                          sx={chipsStyles1}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={7} md={6} lg={4}>
                <div className="main">
                  <div classname="box1">
                    <Grid container spacing={4}>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          React
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Java
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Python
                        </Button>
                      </Grid>

                      <Grid item xs={3}>
                        <MoreHorizIcon sx={icons} />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box2">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src={img1} alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <span>Company Name</span>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box3">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <span>Description :</span>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          - Able to work in good coordination with production
                          managers and Developers.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box4">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>Posted Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Expected Salary</Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box5">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              2023-06-01 02:00:03
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              5.4 LPA
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box6">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>
                          Total Applied{" "}
                          <Chip
                            label={
                              <Typography
                                variant="body2"
                                style={{ fontSize: "12px", color: "white" }}
                              >
                                23
                              </Typography>
                            }
                            sx={chipsStyles}
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              Inactive
                            </Typography>
                          }
                          sx={{ backgroundColor: "#FF0000" }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={7} md={6} lg={4}>
                <div className="main">
                  <div classname="box1">
                    <Grid container spacing={4}>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          React
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Java
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Python
                        </Button>
                      </Grid>

                      <Grid item xs={3}>
                        <MoreHorizIcon sx={icons} />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box2">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src={img1} alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <span>Company Name</span>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box3">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <span>Description :</span>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          - Able to work in good coordination with production
                          managers and Developers.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box4">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>Posted Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Expected Salary</Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box5">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              2023-06-01 02:00:03
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              5.4 LPA
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box6">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>
                          Total Applied{" "}
                          <Chip
                            label={
                              <Typography
                                variant="body2"
                                style={{ fontSize: "12px", color: "white" }}
                              >
                                23
                              </Typography>
                            }
                            sx={chipsStyles}
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px" }}
                            >
                              Pending
                            </Typography>
                          }
                          sx={{ backgroundColor: "#FFC804" }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={7} md={6} lg={4}>
                <div className="main">
                  <div classname="box1">
                    <Grid container spacing={4}>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          React
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Java
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Python
                        </Button>
                      </Grid>

                      <Grid item xs={3}>
                        <MoreHorizIcon sx={icons} />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box2">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src={img1} alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <span>Company Name</span>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box3">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <span>Description :</span>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          - Able to work in good coordination with production
                          managers and Developers.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box4">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>Posted Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Expected Salary</Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box5">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              2023-06-01 02:00:03
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              5.4 LPA
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box6">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>
                          Total Applied{" "}
                          <Chip
                            label={
                              <Typography
                                variant="body2"
                                style={{ fontSize: "12px", color: "white" }}
                              >
                                23
                              </Typography>
                            }
                            sx={chipsStyles}
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              Inactive
                            </Typography>
                          }
                          sx={{ backgroundColor: "#FF0000" }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={7} md={6} lg={4}>
                <div className="main">
                  <div classname="box1">
                    <Grid container spacing={4}>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          React
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Java
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" sx={buttons}>
                          Python
                        </Button>
                      </Grid>

                      <Grid item xs={3}>
                        <MoreHorizIcon sx={icons} />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box2">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src={img1} alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <span>Company Name</span>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box3">
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <span>Description :</span>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          - Able to work in good coordination with production
                          managers and Developers.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box4">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>Posted Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Expected Salary</Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box5">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              2023-06-01 02:00:03
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              5.4 LPA
                            </Typography>
                          }
                          sx={chipsStyles}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="box6">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>
                          Total Applied{" "}
                          <Chip
                            label={
                              <Typography
                                variant="body2"
                                style={{ fontSize: "12px", color: "white" }}
                              >
                                23
                              </Typography>
                            }
                            sx={chipsStyles}
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Chip
                          label={
                            <Typography
                              variant="body2"
                              style={{ fontSize: "12px" }}
                            >
                              Pending
                            </Typography>
                          }
                          sx={{ backgroundColor: "#FFC804" }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className="pagination">
              <Pagination
                count={23}
                variant="outlined"
                shape="rounded"
                boundaryCount={2}
                siblingCount={2}
                //   className={classes.customPagination}
              />
            </div>
          </Container>
        </div>
      </Box>
    </>
  );
};

export default JobDetailswithEditOption;
