import React, { useState } from "react";
import { Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";

import Navbar from "../../../partials/DropdownNavbar";

import "../../../assets/css/Dropdown.css";




const drawerWidth = 400;

const App = () => {
  return (
    <>
      <Toolbar>
        <Typography noWrap sx={{ marginLeft: "20%",display: { xs: 'none',md: 'block'} }}>
          <Navbar />
        </Typography>
      </Toolbar>

      <div style={{ display: "flex" }}>

        <Drawer variant="permanent"  sx={{ width: drawerWidth,display: { md: 'block' } }}>

          <List sx={{backgroundColor:'#6973FE'}}>
          <h3>Smart Job</h3>
            <ListItem>
              <Button variant="outlined"  sx={{color:'black',borderRadius:'20px',backgroundColor:'white',borderColor:'black',fontSize:'20px',fontWeight:'500'}} >
                <AutoAwesomeMosaicOutlinedIcon className="icons"/> Dashboard
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="outlined" sx={{color:'black',borderRadius:'20px',backgroundColor:'white',borderColor:'black',fontWeight:'500'}}>
                <FindInPageOutlinedIcon  className="icons"/> All Recruiters
              </Button>
            </ListItem>
            <Container>
              <Typography variant="body1" className="text">Active recruiter</Typography>
              <Typography variant="body1" className="text">Pending recruiter</Typography>
              <Typography variant="body1" className="text">Edit recruiter</Typography>
              <Typography variant="body1" className="text">Posted Job list</Typography>
              <Typography variant="body1" className="text">Candidate List applied for job</Typography>
            </Container>
            <ListItem>
              <Button variant="outlined" sx={{color:'black',borderRadius:'20px',backgroundColor:'white',borderColor:'black',fontWeight:'500'}}>
                <ContactPageOutlinedIcon  className="icons"/> All Candidate list
              </Button>
            </ListItem>
            <Container>
              <Typography variant="body1" className="text">Active candidate</Typography>
              <Typography variant="body1" className="text">Pending candidate</Typography>
              <Typography variant="body1" className="text">Inactive candidate</Typography>
              <Typography variant="body1" className="text">Edit candidate details</Typography>
              <Typography variant="body1" className="text">Applied Job list</Typography>
            </Container>
            <ListItem >
              <Button variant="outlined"  
              sx={{color:'black',borderRadius:'20px',backgroundColor:'white',borderColor:'black',fontWeight:'500'}}>
                <WorkOutlineOutlinedIcon  className="icons"/> Job List
              </Button>
            </ListItem>
            <Container>
              <Typography variant="body1" className="text">Active jobs</Typography>
              <Typography variant="body1" className="text">Inactive jobs</Typography>
              <Typography variant="body1" className="text">Pending jobs</Typography>
              <Typography variant="body1" className="text">Job details</Typography>
              
            </Container>
            <ListItem sx={{alignItems:'center',justifyContent:'center'}}>
              <Button variant="outlined" 
              sx={{color:'black',borderRadius:'20px',backgroundColor:'white',borderColor:'black',fontWeight:'600'}}>
                <HomeOutlinedIcon  className="icons"/>
                Home
              </Button>
            </ListItem>
            <ListItem sx={{alignItems:'center',justifyContent:'center'}}>
              <Button variant="outlined" 
              sx={{color:'black',borderRadius:'20px',backgroundColor:'white',borderColor:'black',fontWeight:'600'}}>
                <LogoutOutlinedIcon  className="icons"/>
                LogOut
              </Button>
            </ListItem>
            <ListItem></ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default App;
