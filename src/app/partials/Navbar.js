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

import DrawerComp from "../partials/Drawer";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div>
        <AppBar
          sx={{
            background: "transparent",
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
              Smart Job
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
                  <Tab label="Jobs" sx={{ color: "white" }} />
                  <Tab label="Companies" sx={{ color: "white" }} />
                  <Tab label="Services" sx={{ color: "white" }} />
                  <Tab label="User Profile" sx={{ color: "white" }} />
                </Tabs>
                <Button
                  sx={{
                    marginRight: "auto",
                    borderRadius: "20px",
                    color: "white",
                    borderColor: "white",
                  }}
                  variant="outlined"
                >
                  Register
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
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
