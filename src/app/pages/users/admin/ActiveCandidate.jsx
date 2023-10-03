import React from "react";
import Searchbar from "./common/Searchbar";
import Sidebar from "./common/Sidebar";
import Table from "./common/table";
import Menu from "./common/menu";
import { Box, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import Axios from "../../../utils/Axios";
import Loader from "../../users/admin/common/Loader";
import { useState, useEffect } from "react";

const ActiveCandidate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllActiveCandidate = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/getallactivejobseeker");
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllActiveCandidate();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="wrapper"
    >
      <Sidebar />

      {console.log("inside app.js")}
      <Typography
        justifyContent="center"
        alignItems="center"
        variant="h4"
        marginBottom="20px"
      >
        {" "}
        All Active Candidate
      </Typography>

      <Searchbar />
      <Menu />
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : (
        <Table data={data} />
      )}
    </Box>
  );
};

export default ActiveCandidate;
