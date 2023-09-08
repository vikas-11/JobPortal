import React from 'react';
import { Grid, Paper } from '@mui/material';
// import Spirale from "../../admin/common/common-icon/spiraleinfosoft.jpg"
const Tablenbanner = ({data, banner}) => {
 

  return (
    <Grid container spacing={2} display="flex" flexDirection="column" marginLeft="4rem">
      
        <Grid item xs={3} sm={4} md={4} lg={4}>
          <Paper elevation={3}>
            <img src={banner}  style={{ width: '100%', height: 'auto' }} />
            <div style={{ padding: '10px', textAlign: 'center' }}></div>
          </Paper>
        </Grid>
   
    </Grid>
  );
};

export default Tablenbanner;
