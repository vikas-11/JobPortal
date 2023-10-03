import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";
import theme from "../../../../utils/colors";
import { Link as RouterLink } from "react-router-dom";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Menu() {
  const breadcrumbs = [
    <RouterLink
      underline="hover"
      key="1"
      style={{ color: theme.palette.primary.main }}
      to="/dashboard"
      // onClick={handleClick}
    >
      Dashboard
    </RouterLink>,
    <RouterLink
      underline="hover"
      key="2"
      color="inherit"
      to="/active"
      // onClick={handleClick}
    >
      All Recruiters
    </RouterLink>,

    <RouterLink
      underline="hover"
      key="3"
      color="inherit"
      to="/candidate"
      // onClick={handleClick}
    >
      All Candidates
    </RouterLink>,
  ];

  return (
    <Grid container spacing={2} justifyContent={"space-around"} mt={2}>
      <Stack spacing={2}>
        <Grid container justifyContent="center">
        <Grid item xs={6} md={12} lg={12} >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="large" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
}
