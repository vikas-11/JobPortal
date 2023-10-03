import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import colors from "../../../../utils/colors";
import EditIcon from "@mui/icons-material/EditTwoTone";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

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
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // State and handlers for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenuText, setCurrentMenuText] = useState("");

  const handleMenuOpen = (event, text) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenuText(text);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenuText("");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: colors.palette.success }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List style={{ backgroundColor: theme.palette.background.default }}>
          {[
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "active", icon: <PeopleIcon /> },
            { text: "candidate", icon: <InboxIcon /> },
            { text: "postedjob", icon: <InboxIcon /> },
            { text: "domain", icon: <MailIcon /> },
            { text: "homebanner", icon: <MailIcon /> },
            // Add more menu items here
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component="a"
                href={`/${item.text.toLowerCase().replace(/\s/g, "-")}`}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={(event) => handleMenuOpen(event, item.text)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
                <ExpandMoreIcon sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && currentMenuText === item.text}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
              >
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
              </Menu>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <List style={{ backgroundColor: theme.palette.background.default }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component="a"
              href="/home"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon  sx={{marginLeft: "1.5rem"}}/>
              </ListItemIcon>
                <NavLink to="/dashboard" >
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => console.log("Logout clicked")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ExitToAppIcon sx={{marginLeft: "1.5rem"}}/>
              </ListItemIcon>
              <NavLink to="/adminlogin">
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph></Typography>
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}
