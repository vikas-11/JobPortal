import React from "react";
import Sidebar from "./common/Sidebar";
import SearchBar from "./common/Searchbar";
import Card from "./common/card";
import Table from "./common/table";
import Menu from "./common/menu";

import Loader from "../../users/admin/common/Loader";
import { Box, Container } from "@mui/material";
import Axios from "../../../utils/Axios";
import { useState, useEffect } from "react";
// import { useState, useEffect } from 'react';
// import Axios from '../../../utils/Axios';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllActive = async () => {
    setLoading(true);
    try {
      // const response1 = await Axios.get('/getallrecruiter');    FOR ALL RECRUITER
      const response = await Axios.get("/getalluser"); // FOR ALL USERS
      // const response = await Axios.get('/getalladmin');        // FOR ALL USERS
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
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <Sidebar />
        <SearchBar />
        <Card />
        <Menu />
        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : (
          <Table data={data} />
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
