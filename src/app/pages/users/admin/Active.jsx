import React, { useState, useEffect } from 'react';
import Searchbar from "./common/Searchbar";
import Sidebar from "./common/Sidebar";
import StickyHeadTable from "./common/table";
import Menu from "./common/menu";
import { Box, Typography, Container } from "@mui/material";
import { Search } from "@mui/icons-material";
import Axios from "../../../utils/Axios";
import Loader from "../../users/admin/common/Loader";

const Active = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchGetAllActive = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/pagignationofrecruiterandcount", { params: { is_approved: 1, pages: 1 } });
      setData(response.data.data);
      console.log('response.data.data',typeof(response.data.data))
      console.log('response',response.data.data);
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="wrapper"
    >
      <Sidebar />
      <Typography variant="h4" justifyContent="center" alignItems="center" marginBottom="20px">
        Active Recruiter
      </Typography>
      <Searchbar />
      <Menu />

      {/* Pass the fetched data to the corrected Table component*/}
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) :
      (data.length >0 ? (
        <>
        
        {console.log('loader running in active',data)}
        <StickyHeadTable data={data} loading={loading}/>
        </>
      )
      : <div>No data to display</div>)
    }

    </Box>
  );
};

export default Active;

