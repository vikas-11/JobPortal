import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Mobile Menu */}
      <IconButton onClick={toggleDrawer}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{ onBackdropClick: toggleDrawer }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItem>
          {/* Add more list items here */}
        </List>
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
