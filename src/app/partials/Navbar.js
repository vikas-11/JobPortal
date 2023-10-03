import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Grid,
  TextField,
  Chip,
} from "@mui/material";

// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Colors from "../utils/colors";
import DrawerComp from "../partials/Drawer";
import {NavLink, Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { ClassNames } from "@emotion/react";

const Navbar = (props) => {
    
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
// const styles={
//   Link:hover{
//     color:"white";
//   }
// }
const linkStyle={
  // color: Colors.palette.color,
  color:"white",
  textDecoration:"none"
  // marginRight: "10px",
  // "&:visited": {
  //   // marginleft:"30px",
  //   color:Colors.palette.color,
    
  
  }



  return (
    <>
      <div>
        <AppBar
          sx={{
            background: "#6973FE  ",
            boxShadow: "none",
            position: "static",
            height: "70px",
          }}
        >
          <Toolbar>
            <DrawerComp sx={{ marginRight: "auto" }} />
            <Typography
              sx={{
                font: "Readex Pro",
                fontWeight: "400",
                fontSize: "2rem",
                marginRight: "auto",
              }}
            >
              <Link to ="/" style={linkStyle}>

              Smart Job
              </Link>
            </Typography>
            {isMatch ? (
              <></>
            ) : (
              <>
                <Tabs
                  sx={{
                    font: "Poppins",
                    fontWeight: "400",
                    marginRight: "auto",
                  }}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Link to="/jobdetails">

                  <Tab label="Jobs" sx={{ color: "white" }} />
                  </Link>
                  <Link  to="/companyname">
                  
                  <Tab label="Companies" sx={{ color: "white" }} />
                  </Link>
                  <Link t0="">

                  <Tab label="Services" sx={{ color: "white" }} />
                  </Link>

                  <Link to="/jobseeker" >

                  <Tab label="User Profile" sx={{ color: "white" }} />
                  </Link>
                </Tabs>

                {!isLoggedIn && (
                      <>
                    
                        <Button
                      sx={{
                        marginRight: "auto",
                        borderRadius: "20px",
                        // color: "white",
                        // color:black,
                        borderColor: "white",
                      }}
                      variant="outlined"
                      onClick={()=>setIsLoggedIn(true)}
                    >
                      <Link to ="/userlogin" style={linkStyle} >

                      Login
                      </Link>
                    </Button>
                    
                    
                        <Button
                      sx={{
                        marginRight: "auto",
                        borderRadius: "20px",
                        color: "white",
                        borderColor: "white",
                        
                      }}
                      variant="outlined"
                    >
                      <Link to ="/recruiterjobseeker" style={linkStyle}>

                      Register
                      </Link>
                    </Button>
                    
                    </>
                )}
                
                  {isLoggedIn && (
                    <>

                    <Button
                  sx={{
                    marginRight: "auto",
                    borderRadius: "100%",
                    color: "white",
                    // borderColor: "white",
                    
                  }}
                  variant="outlined"
                >
                  <Link to="/userlogin" >

                  <Stack direction="row" spacing={2}>
     
     <Avatar src="/broken-image.jpg" />
   </Stack>
                  
                  </Link>
                </Button>
                    <Button
                  sx={{
                    marginRight: "auto",
                    borderRadius: "20px",
                    color: "white",
                    borderColor: "white",
                  }}
                  variant="outlined"
                  onClick={()=>setIsLoggedIn(false)}
                  >
                  <Link to="/userlogin"   >
                
                  Logout
                  </Link>
                </Button>
                    </>
                  )}
                
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;



