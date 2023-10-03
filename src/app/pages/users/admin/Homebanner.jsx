  
  import React from "react";
  import SearchBar from "./common/Searchbar";
  import Sidebar from "./common/Sidebar";
  import { Typography, Divider, Container, ButtonGroup } from "@mui/material";
  import Button from "@mui/material/Button";
  import Box from "@mui/material/Box";
  import Pagination from "@mui/material/Pagination";
  import Stack from "@mui/material/Stack";
  import Spirale from "../admin/common/common-icon/spiraleinfosoft.jpg";
  import Tablebanner from "../admin/common/Tablebanner"
  import { Grid } from '@mui/material';
  import Axios from '../../../utils/Axios';
  import { useState, useEffect } from 'react';
  import Loader from '../../users/admin/common/Loader';
  const Homebanner = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllActive = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('/getbanner');
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllActive();
  }, []);
    const rectangleStyle = {
      width: "400px",
      height: "100px",
      borderRadius: "31px",
      backgroundColor: "white",
      // Replace with the desired color
    };
    return (
      <Box>
        <Sidebar />
        <SearchBar />
        
          <br />
          <Typography
            variant="h5"
            sx={{ justifyContent: "center", alignItems: "center" }}
            align="center"
            gutterBottom
            xs={12}
            sm={10}
            md={8}
            marginLeft="4rem"
          >
            Home banner list
          </Typography>
          <Divider
            style={{
              width: "100%",
              height: "14px",
              marginLeft: "3rem",
              color: "black",
            }}
            variant="middle"
          />
          <Box
            display="flex"
            flexDirection="column"
            sx={{ justifyContent: "center", alignItems: "center" }}
            xs={12}
            sm={10}
            md={8}
            marginLeft="4rem"
          >
            <Grid container  display="flex" flexDirection="row" justifyContent="space-evenly">
              <Button variant="contained" color="primary">
                ADD
              </Button>
              <Button variant="contained" color="primary">
                EDIT
              </Button>
              <Button variant="contained" color="primary">
                DELETE
              </Button>
            </Grid>
          </Box>
          <Divider
            style={{
              width: "100 %",
              height: "14px",
              marginLeft: "3rem",
              color: "black",
            }}
            variant="middle"
          />

          {/* ID BANNER LINK DATE AND TIME */}
          

            {/* PROBLEM */}
          <Grid  container spacing={1} display="flex" flexDirection="row" justifyContent="space-around"   >
                <Typography  variant="h6" >ID</Typography>
                <Typography variant="h6">Banner</Typography>
                <Typography variant="h6">Link</Typography>
                <Typography variant="h6">DateTime</Typography>
            </Grid>
        

          <Divider
            style={{
              width: "100%",
              height: "14px",
              marginLeft: "3rem",
              color: "black",
            }}
            variant="middle"
          />
          <br />

          {/* Banner */}
          {/* ----------Line 1-------------- */}
          <br />
            {/* Banner1 */}
          <Container display="flex"  xs={3} sm={6} md={4}  >
          {/* <Divider
            style={{
              width: "100%",
              height: "14px",
              margin: "0 auto",
              color: "black",
            }}
            variant="middle"
          /> */}

{data.map((job, index) => (
                <Grid key={index} item xs={12} >
                  <Tablebanner banner={job.banner} />
                </Grid>
              ))}
          
            {loading ? <Loader/> : <Tablebanner data ={data}/>}
          <Divider
            style={{
              width: "100%",
              height: "14px",
              margin: "0",
              color: "black",
            }}
            variant="middle"
          />
          </Container>
          
        
      
        <br /> 
        <Box display="flex" justifyContent="space-around">
          <Stack spacing={2}>
            {/* <Pagination count={10} shape="rounded" /> */}
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </Box>
      </Box>
    );
  };

  export default Homebanner;

