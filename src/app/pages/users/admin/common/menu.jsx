import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";
import theme from "../../../../utils/colors";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Menu() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      style={{color: theme.palette.primary.main }}
      href="/"
      onClick={handleClick}
    >
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/active"
      onClick={handleClick}
    >
     All Recruiters
    </Link>,

    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/inactive"
      onClick={handleClick}
    >
      All Candidates
    </Link>,
  ];

  return (
    <Grid  container spacing={2} justifyContent={'space-around'} ml={3} mt={2}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Stack spacing={2}>
        <Grid container justifyContent="center">
          <Grid item xs={5} md={12} lg={12}>
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
