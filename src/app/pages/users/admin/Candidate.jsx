import React from "react";
import Sidebar from "../admin/common/Sidebar";
import SearchBar from "./common/Searchbar";
import Menu from "./common/menu";
import Table from "./common/table";
import Axios from "../../../utils/Axios";
import Loader from "../../users/admin/common/Loader";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
const Candidate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); 

  const fetchGetAllCandidate = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/getalljobseeker"); 
      setData(response.data.data); 
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllCandidate();
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

      <Typography
        justifyContent="center"
        alignItems="center"
        variant="h4"
        marginBottom="20px"
      >
        {" "}
        All Candidate
      </Typography>

      <SearchBar />
      <Menu />
      {/* <Table label1={"User ID"} label2={"Name"} label3={"Applied on"} label4={"Contact"} field5={"Date/Time"}/> */}
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

export default Candidate;
