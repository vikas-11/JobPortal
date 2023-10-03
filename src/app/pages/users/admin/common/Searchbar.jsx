import React from "react";
import {
  TextField,
  InputAdornment,
  Box,
  Grid,
  Button,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/EditTwoTone";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SearchBar = () => {
  const handleArrowDropDownClick = () => {
    console.log("ArrowDropDown clicked");
  };

  const handleEditClick = () => {
    console.log("Edit clicked");
  };

  const handleDeleteClick = () => {
    console.log("Delete clicked");
  };

  const handleInfoClick = () => {
    console.log("Info clicked");
  };

  return (
    
    <Grid container alignItems="center" justifyContent="center" ml="4rem">
      <Grid item xs={10} sm={10} md={8} lg={7}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#6973FE"
          p={1}
          borderRadius={45}
        >
          <Container>
            <TextField
              variant="standard"
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
                style: { color: "white" },
                inputProps: {
                  style: { color: "white" },
                },
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#6973FE",
                },
                "&:hover .MuiInput-underline:before": {
                  borderBottomColor: "white",
                },
                "&:hover .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
              }}
              style={{ width: "100%" }}
            />
          </Container>
        </Box>
      </Grid>

      <Box display="flex" flexDirection="row">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          // ml={2}
        >
          <Button onClick={handleArrowDropDownClick}>
            <ArrowDropDownIcon
              style={{ color: "#6973FE", marginRight: "20px"}}
            />
          </Button>
          <Button onClick={handleEditClick}>
            <EditIcon style={{ color: "#6973FE", marginRight: "20px" }} />
          </Button>
          <Button onClick={handleDeleteClick}>
            <DeleteIcon style={{ color: "#6973FE", marginRight: "20px" }} />
          </Button>
          <Button onClick={handleInfoClick}>
            <InfoIcon style={{ color: "#6973FE", marginRight: "20px" }} />
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SearchBar;
