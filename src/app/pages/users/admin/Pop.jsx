// import { Box, Container, Typography, Grid } from '@mui/material'
// import React from 'react'
// import Button from '@mui/material/Button';
// import popimage from "../admin/common/common-icon/pop.png";
// const Pop = () => {
//   return (
//     <Grid sx={{mt:"15rem", ml:"2rem"}} className='container' justifyContent="center" alignItems="center" >
//             <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" marginLeft={5} >
//                   <Typography 
//                    variant='h4'>Are you sure you want to delete it?
//                   </Typography>
//                   <img src={popimage} alt="" />
//                   <Box display="flex" justifyContent="space-around"sx={{ml:"30rem"}}>
//                         <Button variant="contained" color="primary" sx={{ml:"-30rem"}} >
//                           Yes
//                         </Button>
//                         <Button variant="contained" color="primary">
//                           No
//                         </Button>
//                 </Box>
//             </Box>
      
//     </Grid>
//   )
// }

// export default Pop

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import popimage from "../admin/common/common-icon/pop.png";

const Pop = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="auto" 
    >
      <Typography variant="h5" textAlign="center" marginBottom={2}>
        Are you sure you want to delete it?
      </Typography>
      <img src={popimage} alt="" />
      <Box display="flex" justifyContent="center" marginTop={0}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: "50px",
            borderColor: "#6973FE",
            color: "black",
            width: "50%",
            "&:hover": {
              backgroundColor: "#6973FE",
              color: "white",
            },
          }}
        >
          Yes
        </Button>
        <Box marginX={6}></Box> 
        <Button
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: "50px",
            borderColor: "#6973FE",
            color: "black",
            width: "50%",
            "&:hover": {
              backgroundColor: "#6973FE",
              color: "white",
            },
          }}
        >
          No
        </Button>
      </Box>
    </Box>
  );
};

export default Pop;


