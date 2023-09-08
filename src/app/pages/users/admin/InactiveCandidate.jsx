
import React from 'react'
import Searchbar from"./common/Searchbar";
import Sidebar from"./common/Sidebar";
import Table from "./common/table"
import Menu from "./common/menu";
import { Box, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Loader from '../../users/admin/common/Loader';
import Axios from '../../../utils/axios';

const InactiveCandidate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data
  
    const fetchGetAllInactiveCandidate = async () => {
      setLoading(true);
      try {
        const response = await Axios.get('/getalldeactivejobseeke');
        setData(response.data.data); // Update the state with fetched data
        console.log(response.data.data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchGetAllInactiveCandidate();
    }, []);
  return (
   <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className="wrapper">
    <Sidebar/>
    <Typography  justifyContent="center" alignItems="ceneter" marginLeft="2rem" variant='h4'>Inactive Candidate </Typography>
    <Searchbar/>
    <Menu/>
    {loading ? <h1><Loader/></h1> : <Table data={data} />}
    {/* <Table/> */}
   </Box>
  )
}

export default InactiveCandidate
