import React from 'react'
import SearchBar from '../../users/admin/common/Searchbar'
import Sidebar from '../../users/admin/common/Sidebar'
import Table from '../../users/admin/common/table'
import { Container, Typography,Box, Stack } from '@mui/material'
import Axios from '../../../utils/axios';
import Loader from '../../users/admin/common/Loader';
import{ useState, useEffect } from 'react';

const Domain = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchAllDomain = async () => {
    setLoading(true);
    try {
      const response = await Axios.post('/adddomain');
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data)
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllDomain();
  }, []);
  return (
    <Box>

   
    <Container sx={{ displa:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <Sidebar/>
    {/* <Typography sx={{ textAlign: "center", my: 2 }} variant='h4'>Domain</Typography> */}
      <SearchBar/>
      <br /><br />
      {/* <Table  /> */}

      {loading ? <h1><Loader/></h1> : <Table data={data} />}
    </Container>
    </Box>
  )
}


export default Domain;

