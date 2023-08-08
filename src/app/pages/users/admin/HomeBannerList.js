import React, { useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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

import Navbar from "../../../partials/Navbar2";

import "../../../assets/css/BannerList.css";
import rectangle from "../../../assets/img/users/Rectangle.jpg";
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

  // necessary for content to be below app bar
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

export default function HomeBannerList() {
  const [open, setOpen] = React.useState(false);

  return (
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

                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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

                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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

      <Box component="main">
        <DrawerHeader />

        <div className="main">
          <Container>
            <Typography
              variant="h5"
              style={{ textAlign: "left", margin: "20px 20px" }}
            >
              Home Banner List
            </Typography>
            <hr />
          </Container>

          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "20px",
                "@media (min-width: 600px)": {
                  flexDirection: "row",
                  alignItems: "center",
                },
              }}
            >
              <Button variant="contained" className="btns">
                Add
              </Button>
              <Button variant="contained" className="btns">
                Edit
              </Button>
              <Button variant="contained" className="btns">
                Delete
              </Button>
            </Box>
            <hr />
          </Container>

          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: "20px",
                "@media (min-width: 600px)": {
                  flexDirection: "row",
                  alignItems: "center",
                },
              }}
            >
              <Typography variant="h6">ID</Typography>
              <Typography variant="h6">Banner</Typography>
              <Typography variant="h6">Link</Typography>
              <Typography variant="h6">Date/Time</Typography>
            </Box>
            <hr />

            <div className="box-container">
              <div className="left-content">
                <p>619</p>
              </div>
              <div className="image-container">
                <img src={rectangle} />
              </div>
              <div className="right-content">
                <p>2023-06-01</p>
              </div>
            </div>

            <div className="box-container">
              <div className="left-content">
                <p>619</p>
              </div>
              <div className="image-container">
                <img src={rectangle} />
              </div>
              <div className="right-content">
                <p>2023-06-01</p>
              </div>
            </div>

            <div className="box-container">
              <div className="left-content">
                <p>619</p>
              </div>
              <div className="image-container">
                <img src={rectangle} />
              </div>
              <div className="right-content">
                <p>2023-06-01</p>
              </div>
            </div>

            <div className="box-container">
              <div className="left-content">
                <p>619</p>
              </div>
              <div className="image-container">
                <img src={rectangle} />
              </div>
              <div className="right-content">
                <p>2023-06-01</p>
              </div>
            </div>

            <div style={styles.pagination}>
              <Stack>
                <Pagination
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                />
              </Stack>
            </div>
          </Container>
        </div>
      </Box>
    </Box>
  );
}
