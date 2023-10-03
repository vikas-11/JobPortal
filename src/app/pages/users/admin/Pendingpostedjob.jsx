import React from "react";
import Sidebar from "../admin/common/Sidebar";
import SearchBar from "../admin/common/Searchbar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
// import hamburger from "../../users/admin/common/common-icon/Group 14hamburger (1).png";
import searchIcon from "../../users/admin/common/common-icon/Mask groupsearchicon.png";
import options from "../../users/admin/common/common-icon/Group 46status.png";
import down from "../../users/admin/common/common-icon/Mask groupLogout (1).png";
import colors from "../../../utils/colors";
import PostedJobCard from "./PostedJobCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Axios from "../../../utils/Axios";
import Loader from "../../users/admin/common/Loader";
import { useEffect, useState } from "react";

const styles = {
  container: {
    marginLeft: "30px",
    paddingInline: "30px",
    maxWidth: "100%",
    width: "100%",
    margin: "0 auto",
  },
  sidebar: {
    display: { xs: "none", md: "block" },
  },
  pageTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
  },
  searchBox: {
    width: { xs: "100%", md: "783px" },
    height: "60px",
    borderRadius: "45px",
    background: colors.background,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: "10px",
    paddingBlock: "10px",
  },
  searchLabel: {
    fontSize: { xs: "18px", md: "30px" },
    fontWeight: "300",
  },
  // filterBar: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   margin: "20px 40px",
  // },
  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    padding: "20px 0",
    flexWrap: "wrap",
  },

  // filterLabel: {
  //   fontSize: "32px",
  // },
  filterLabel: {
    fontSize: { xs: "4vw", md: "2vw" },
    textAlign: { xs: "center", md: "left" },
  },
  optionsImage: {
    width: { xs: "30px", md: "52px" },
    height: { xs: "22px", md: "37px" },
    marginLeft: "20px",
  },
  // sortBox: {
  //   width: "115px",
  //   height: "41px",
  //   border: `1px solid ${colors.background}`,
  //   borderRadius: "45px",
  //   position: "relative",
  // },
  sortBox: {
    display: "flex",
    alignItems: "center",
    fontSize: { xs: "4vw", md: "2vw" },
    cursor: "pointer",
  },
  downImage: {
    width: "1em",
    height: "auto",
    marginLeft: "8px",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBlock: "20px",
  },
};
const searchbar = {
  width: "20px",
  marginLeft: "30rem",
  // Add other styles as needed
};

const PendingPostedJob = ({ Postedtitle, buttonColor }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllActive = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/getalljob"); // Check if the API endpoint is correct
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllActive();
  }, []);
  return (
    <div>
      <Sidebar />

      <Grid container spacing={2}>
        {/* Main Content */}
        <Grid marginLeft={6} alignItems="center" item xs={10} md={11}>
          <br />
          <SearchBar style={searchbar} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={styles.filterBar}
            xs={1}
            md={14}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Stack
                // overflow="scroll"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "40px",
                  alignItems: "center",
                  marginLeft: "2rem",
                }}
              >
                <Typography variant="h4" sx={styles.filterLabel}>
                  Active
                </Typography>
                <Typography variant="h4" sx={styles.filterLabel}>
                  Inactive
                </Typography>
                <Typography variant="h6" sx={styles.filterLabel}>
                  Pending
                </Typography>
                <Typography variant="h6" sx={styles.filterLabel}>
                  All
                </Typography>
              </Stack>

              <Stack>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "45px", marginLeft: "2rem" }}
                >
                  <KeyboardArrowDownIcon />
                </Button>
              </Stack>
            </Grid>
          </Box>

          <Divider
            sx={{
              backgroundColor: "black",
              border: "1px solid #000000",
              marginLeft: "2rem",
              marginBottom: "30px",
              marginTop: "-20px",
              width: "100%",
            }}
          />

          {loading ? (
            <Loader />
          ) : (
            <Grid
              container
              spacing={3}
              rowSpacing={5}
              style={styles.container}
              sx={styles.container}
            >
              {data.map((job, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <PostedJobCard
                    title={job.job_id}
                    Company={job.name}
                    Postedtitle1={Postedtitle}
                    Description={job.description}
                    PostedDate={job.created_at}
                    Salary={job.package}
                    buttonColor={buttonColor}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          <Stack sx={styles.pagination}>
            <Pagination
              count={23}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  width: { xs: "1vh", md: "4vh" },
                  height: "30px",
                },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default PendingPostedJob;
