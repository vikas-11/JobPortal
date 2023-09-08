import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Typography, Box } from '@mui/material';
import Axios from '../../../utils/axios'; // Make sure the path is correct
import Searchbar from './common/Searchbar'; // Check the path
import Sidebar from './common/Sidebar'; // Check the path
import Table from './common/table'; // Check the path
import Menu from './common/menu'; // Check the path
import Loader from '../../users/admin/common/Loader';
const Inactive = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllInactiveRecruiter = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('/getalldeactiverecruiter'); // Check if the API endpoint is correct   FOR ALL CANDIDATES
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllInactiveRecruiter();
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className="wrapper">
      <Sidebar />
      <Typography marginLeft="2rem" justifyContent="center" alignItems="center" variant="h4">
        Inactive Recruiter
      </Typography>
      <Searchbar />
      <Menu />
      {loading ? <h1><Loader/></h1> : <Table data={data} />}
    
    </Box>
  );
};

export default Inactive;
