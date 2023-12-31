import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
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
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MUIDataTable from "mui-datatables";
import Navbar from "../../../partials/Navbar2";
import "./Recruiter.css";
import Axios from "../../../utils/axios";
const drawerWidth = 240;



const cardData = [
  {
    icon: <PeopleOutlineIcon sx={{ fontSize: "45px", color: "white" }} />,
    title: "Total Users",
    count: "916",
  },
  {
    icon: (
      <ContactEmergencyOutlinedIcon sx={{ fontSize: "45px", color: "white" }} />
    ),
    title: "Total Candidates",
    count: "811",
  },
  {
    icon: <GroupsOutlinedIcon sx={{ fontSize: "45px", color: "white" }} />,
    title: "Total Recruiters",
    count: "169",
  },
  {
    icon: <WorkOutlineIcon sx={{ fontSize: "45px", color: "white" }} />,
    title: "Total Jobs",
    count: "1098",
  },
];

const columns = [
  {
    name: "id",
    label: "User ID",
    responsive:'stacked',
    options: {
     filter: true,
     sort: false,
     responsive:'stacked',
    }
   },
   {
    name: "name",
    label: "Name",

    options: {
     filter: true,
     sort: false,
     responsive:'stacked',
    }
   },
  
  {
   name: "status",
   label: "Status",

   options: {
    filter: true,
    sort: false,
    responsive:'stacked',
   }
  },
  {
   name: "time",
   label: "Created At",

   options: {
    filter: true,
    sort: false,
    responsive:'stacked',
   }
  },
 ];
 
 const data = [
  { name: "Lorem Ipsum", id: "169", status: "Active", time: "2023-07-04 07:00:29" },
  { name: "Lorem Ipsum LTD", id: "156", status: "In Review", time: "2023-06-01 02:00:03" },
  { name: "Lorem Ipsum", id: "333", status: "In Active", time:"2023-06-01 02:00:03" },
  { name: "Lorem Ipsum", id: "406", status: "In Review", time: "2023-06-01 02:00:03" },
  { name: "Lorem Ipsum LTD", id: "916", status: "Active", time: "2023-07-04 07:00:29" },
  { name: "Lorem ", id: "619", status: "In Review", time: "2023-06-01 02:00:03" },
  { name: "Lorem LTD", id: "434", status: "In Active", time: "2023-07-04 07:00:29" },
 ];
 
 const options = {
   filterType: 'checkbox',
   responsive: "scrollMaxHeight",
   pagination:false,
 };

const styles = {
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom:"10px"
  },
 
  bottomIcons: {
    position: "absolute",
    bottom: "10px",
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


export default function ActiveRecruiter() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const AdminAllRecruiter = async () => {
  // setLoading(true);
  //   try {
  //     const response = await Axios.get("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally{
  //     setLoading(false);
  //    }
  // };

  // useEffect(() => {
  //   AdminAllRecruiter();
  // }, []);

  return (
    
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography noWrap sx={{ marginLeft: "4%" }}>
            <Navbar />
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer variant="permanent">
        <List
          sx={{
            width: "auto",
            height: "auto",
            marginLeft: "10px",
            marginTop: "10px",
            borderRadius: "50px",
            marginBottom: "10px",
            backgroundColor: "#6973FE",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List sx={{ height: "100%" }}>
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
                          sx={{ marginTop: "220px", fontSize: "30px" }}
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
        <div className="cards-container">
          <Grid container spacing={3}>
            {cardData.map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
              >
                <Card
                  className="custom-card"
                  sx={{ backgroundColor: "#7797FE", height: "100px" }}
                >
                  <CardContent>
                    <Grid container rowSpacing={1} alignItems="center">
                      <Grid item xs={4} className="icon-container">
                        {card.icon}
                      </Grid>
                      <Grid item xs={8}>
                        <span >{card.title}</span>
                        <h3 >{card.count}</h3>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
   
          <div className="gridHeading"
          >
            <Typography variant="h6" style={{ marginRight: "20px" }}>
              Dashboard{" "}
            </Typography>
            <Typography variant="h6" style={{ marginRight: "20px" }}>
              All Recruiters
              <ArrowForwardIosIcon
                sx={{ fontSize: "18px", marginLeft: "30px" }}
              />
            </Typography>
            <Typography variant="h6">
              All Candidates
              <ArrowForwardIosIcon
                sx={{ fontSize: "18px", marginLeft: "30px" }}
              />
            </Typography>
          </div>
  

        <Box  sx={{
            marginBottom:"10px",
          }}> 
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
          pagination={false}
     
        />
        </Box>
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
      </Box>
    </Box>
  );
}
